import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FeatureAndValue } from '../../ui-models/featureAndValue';
import { DialogsService } from '../../dialogs/dialogs.service';
import { DatasetFactoryService } from '../../jaqpot-client/factories/dataset-factory.service';
import { Dataset, Task, Model, Report } from '../../jaqpot-client';
import { Config } from '../../config/config';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { throwError, Subject } from 'rxjs';
import { TaskApiService } from '../../jaqpot-client/api/task.service';
import { delay } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { ValidationApiService } from '../../jaqpot-client/api/validation.service';
import { ReportApiService } from '../../jaqpot-client/api/report.service';


@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  @ViewChild('dataInput')
  dataInput: ElementRef;

  @Input() indepFeats:FeatureAndValue[]
  @Input() depFeats:FeatureAndValue[]
  @Input() model:Model;

  datasetForValidation:Dataset
  datasetFormated:boolean = false;

  taskStarted:boolean = false;

  taskGot:Task
  taskHasError:boolean = false;
  taskCompletedSuccesfully:boolean = false;
  viewError:boolean = false;

  progressValue:Number = 0;

  observe: Subject<Task> = new Subject();
  disabled:boolean = true;
  validationType:string;

  report:Report;
  viewReport:boolean = false;

  constructor(
    private _dialogsService:DialogsService,
    private _datasetFactory:DatasetFactoryService,
    // private _ngxPicaService:NgxPicaService,
    private _datasetApi:DatasetService,
    private _taskApi:TaskApiService,
    private _validateApi:ValidationApiService,
    private _reportApi:ReportApiService
  ) {   }

  ngOnInit() {
    this.observe.subscribe((task:Task) =>{
      this.getTask(task._id)      
    })
  }

  changeListener(files: FileList) {
    
    if (files && files.length === 1 && files.item(0).name.split(".")[1] === 'csv') {
      let reader: FileReader = new FileReader();
      let file: File = files.item(0);
      reader.readAsText(file);
      reader.onload = (e) => {
        var _csv = reader.result;
        _csv = _csv.toString()
        const rows = _csv.split(/\r?\n/)  
        let ids = rows[0].split(/,|;/);
        this._dialogsService.askForId(ids).subscribe(result =>{
            reader.abort()
            if(typeof result != 'undefined'){
              this.datasetForValidation = this._datasetFactory.matchValidateDataset(this.indepFeats,this.depFeats, _csv, result)
              this.datasetFormated = true
            }
          })
      }
    }
    else {
      let i = 0;
      let images_csv: string;
      images_csv = "id" + "," + "image" + "\n";
      let images:{ [key: string]: string} = {};
      let images_num = files.length
      let files2:File[] = []
      Array.from(files).forEach((file:File) =>{
        files2.push(file)
      })
      // var options:NgxPicaResizeOptionsInterface = <NgxPicaResizeOptionsInterface>{};
      // let aspectRatio:AspectRatioOptions = <AspectRatioOptions>{};
      // options.aspectRatio = aspectRatio
      // options.aspectRatio.keepAspectRatio = true;
      // this._ngxPicaService.resizeImages(files2, 512, 512, options).subscribe((imageResized: File) => {
      //   let reader: FileReader = new FileReader();
      //   reader.readAsDataURL(imageResized);
      //   reader.onload = (e) =>{
      //     let image_to_csv = imageResized.name.toString() + "," + reader.result.toString() + "\n";
      //     images_csv += image_to_csv
      //     images[imageResized.name] = reader.result.toString();
      //     i += 1;
      //     if(images_num === i){
      //       this.datasetForValidation = this._datasetFactory.matchValidateDataset(this.indepFeats,this.depFeats, images_csv, "None")
      //       this.datasetFormated = true
      //     }
      //   }, (err: NgxPicaErrorInterface) => {
      //     throw err.err;
      // }})

    }
    this.dataInput.nativeElement.value = "";

  }

  eraseDataset(){
    delete this.datasetForValidation 
    this.datasetFormated = false
}

startValidation(){
  this.taskStarted = true;
  this._datasetApi.postEntity(this.datasetForValidation).subscribe((dataset:Dataset)=>{
    let datasetUri = Config.JaqpotBase + "/dataset/" + dataset._id
    let modelUri = Config.JaqpotBase + "/model/" + this.model._id
    this._validateApi.externalValidation(modelUri, datasetUri, this.validationType).subscribe((task:Task)=>{
      this.progressValue = 5  
      this.getTask(task._id)
    }) 
  })
}

getTask(taskId){
  this._taskApi.getTask(taskId)
        .pipe(delay(800)).subscribe((taskGot:Task) => {
          this.taskGot = taskGot
          if(typeof taskGot != 'undefined'){
            if(taskGot.status.toString() === 'QUEUED' || taskGot.status.toString() === 'RUNNING' && taskGot.percentageCompleted < 100){
              if(typeof taskGot.percentageCompleted != 'undefined'){
                this.progressValue = taskGot.percentageCompleted + 5
              }
              this.observe.next(taskGot);
            }else{
              if(typeof taskGot.percentageCompleted != 'undefined'){
                this.progressValue = taskGot.percentageCompleted + 5
                if(taskGot.percentageCompleted === 100){
                  this.taskCompletedSuccesfully = true;
                  // this.predictedDataset= taskGot.result;
                }
              }
              this.taskCompletedSuccesfully = true;
              this.taskGot = taskGot
              this.observe.unsubscribe();
            }
          }
          
        },error => this.handleTaskError(error, taskId))
  }

  downloadTemplate(){
    var csvData:string = "";
      let i = 0;
      this.indepFeats.forEach((feat:FeatureAndValue)=>{
        if(i != 0){
          csvData = csvData.concat("," + feat.feature.meta.titles[0].toString())
        }
        else{
          csvData = csvData.concat(feat.feature.meta.titles[0].toString())
        }
       i += 1;
      })
      this.depFeats.forEach((feat:FeatureAndValue)=>{
        if(i != 0){
          csvData = csvData.concat("," + feat.feature.meta.titles[0].toString())
        }
        else{
          csvData = csvData.concat(feat.feature.meta.titles[0].toString())
        }
       i += 1;
      })
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, "dataset.csv");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = 'dataset.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  viewTheError(){
    this.viewError = true
  }

  public onValChange(val: string) {
    this.validationType = val;
    this.disabled = false;
  }


  viewTheReport(){
    this._reportApi.getWithIdSecured(this.taskGot.result.split("/")[1]).subscribe((report:Report) =>{
      this.report = report
      this.viewReport = true;
    })
  }

  private handleTaskError(error: HttpErrorResponse, taskId) {
    console.log(error)
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(error.error)
      this.observe.unsubscribe()
      this.taskGot = error.error;
      this.taskHasError = true;
      if(typeof this.taskGot.percentageCompleted != 'undefined'){
        this.progressValue = this.taskGot.percentageCompleted + 5
      }
      console.error(error.error);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
