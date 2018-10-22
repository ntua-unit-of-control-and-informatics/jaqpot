import {Component,OnInit,ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {SessionService} from '../session/session.service';
import {DialogsService} from '../dialogs/dialogs.service';
import { DatasetFactoryService } from '../jaqpot-client/factories/dataset-factory.service';
import { FeatureApiService } from '../jaqpot-client/api/feature.service';
import { DatasetService } from '../jaqpot-client/api/dataset.service';
import { Dataset, Model, User } from '../jaqpot-client';
import { ModelApiService } from '../jaqpot-client/api/model.service';
import { UserService } from '../jaqpot-client/api/user.service';
import { Organization } from '../jaqpot-client/model/organization';

// export interface Queries{
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  listView = true;
  query: string = "Mine"
  queries_enabled: boolean = false;
  queries_for: string
  add_dataset: boolean = false;

  datasets_to_view:Dataset[] = []
  models_to_view:Model[] = []
  view_type:string = "list"
  quick_view:boolean = true;
  organizations:string[];

  constructor(public oidcSecurityService: OidcSecurityService,
    public sessionService: SessionService,
    public router: Router,
    public location: Location,
    public dialogsService: DialogsService,
    public datasetFactory: DatasetFactoryService,
    public featureApi:FeatureApiService,
    public datasetApi:DatasetService,
    public modelApi:ModelApiService,
    public userApi:UserService,
    private elRef: ElementRef) {

  }

  ngOnInit() {
    let params:Map<string, any> = new Map();
    params.set("min", 0);
    params.set("max", 10);
    params.set("existence", Dataset.ExistenceEnum.UPLOADED)
    this.datasetApi.getList(params).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })
    let model_params:Map<string, any> = new Map();
    model_params.set("min", 0);
    model_params.set("max", 10);
    this.modelApi.getList(model_params).subscribe((models:Model[])=>{
      this.models_to_view = models
    })
    
  }

  ngOnAfterViewInit() {
    var div = this.elRef.nativeElement.querySelector('div');
  }

  changeToListView() {
    this.listView = true;
    this.view_type = "list"
  }

  changeToGridView() {
    this.listView = false;
    this.view_type = "grid"
  }

  sharedChosen() {
    this.query = "Shared";
    this.userApi.getPropertyWithIdSecured(this.sessionService.getUserId(), 'organizations').subscribe(
      (user:User) => {
        this.organizations = user.organizations
      }
    )
    // console.log(this.queries_for)
  }

  mineChosen() {
    this.query = "Mine"
  }

  goToDatasetView() {
    this.models_to_view = []
    this.fetchDatasets(0, 10, Dataset.ExistenceEnum.UPLOADED)
    this.queries_for = "Datasets"
    this.quick_view = false
    this.queries_enabled = true
    this.add_dataset = true
  }

  goToModelView() {
    this.queries_for = "Models"
    this.datasets_to_view = []
    this.fetchModels(0, 20);
    this.quick_view = false
    this.queries_enabled = true
    this.add_dataset = false
  }

  // addDatasetDialog(){
  //   this.dialogsService.addDataset();
  // }

  changeListener(files: FileList) {
    // console.log(files);
    if (files && files.length > 0) {
      let file: File = files.item(0);
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        var _csv = reader.result;
        _csv = _csv.toString()
        this.dialogsService.addDataset(_csv, file.name,
          this.datasetFactory,
          this.featureApi,
          this.datasetApi).subscribe(result =>{
            reader.abort()
            this.fetchDatasets(0, 10, Dataset.ExistenceEnum.UPLOADED)
          })
      }
    }
  }

  fetchDatasets(min:number, max:number, existence:Dataset.ExistenceEnum){
    let params:Map<string, any> = new Map();
    params.set("min", min);
    params.set("max", max);
    params.set("existence", existence)
    this.datasetApi.getList(params).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })

  }

  fetchModels(min:number, max:number){
    let params:Map<string, any> = new Map();
    params.set("min", min);
    params.set("max", max);
    this.modelApi.getList(params).subscribe((models:Model[]) => {
      this.models_to_view = models
    })

  }

}
