import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, Output, EventEmitter, AfterViewInit} from '@angular/core';
import { SessionService } from '../../session/session.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { Dataset, FeatureInfo, DataEntry } from '../../jaqpot-client';
import { Subscription , merge, Observable, of as observableOf} from 'rxjs';
import { DialogsService } from '../../dialogs/dialogs.service';
import { Router } from '@angular/router';
import { MatTableDataSource, MatPaginator} from '@angular/material';
import { Feature } from '../../jaqpot-client/model/feature';
import { DatasetView } from '../../ui-models/datasetView';
import { Config } from '../../config/config';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { DatasetToViewdataService } from '../../services/dataset-to-viewdata.service';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';


@Component({
  selector: 'app-dataset-detail',
  templateUrl: './dataset-detail.component.html',
  styleUrls: ['./dataset-detail.component.css']
})
export class DatasetDetailComponent implements OnChanges, AfterViewInit {

  displayedColumns:string[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input() datasetToSee:Dataset;

  @Input() viewOrEdit:string;

  // @Input() saveEmit:string;

  @Output() datasetChanged = new EventEmitter<any>();

  @Output() featsChangedArray = new EventEmitter<any>();

  subscription:Subscription;
  isLoading:boolean = true;

  isLoadingResults:boolean = true;
  dataSource:{ [key: string]: any; } = {};
  data_available:boolean = false;
  // checkDatasetModel:boolean = true;
  // rowwidth:number=400;
  // dataRow:IDataRow;
  // dataRows:Array<any> = new Array<any>();

  totalRows:number;
  features:Feature[] = [];

  edit:boolean = false

  featsChanged:Feature[] = []


  // dataSource = new MatTableDataSource<any>(this.dataRows);

  constructor(
    public datasetApi:DatasetService,
    public datasetViewService:DatasetToViewdataService,
    public featureApi:FeatureApiService
  ) { }

  ngOnChanges() {
    this.totalRows = this.datasetToSee.totalRows;
    // console.log(this.saveEmit)
    if(this.viewOrEdit === 'edit'){
      this.edit = true
    }else{
      this.edit = false
    }
  }

  ngAfterViewInit(){
    this.displayedColumns.push('Id')
    this.datasetToSee.features.forEach(fi => {
      this.displayedColumns.push(fi.name)
    })
    this.datasetToSee.features.forEach((fi:FeatureInfo)=>{
      let _uri:string = fi.uri
      let _stringSplitted = _uri.split("/")
      let featId = _stringSplitted[_stringSplitted.length - 1]
      this.featureApi.getWithIdSecured(featId).subscribe((feat:Feature)=>{
        this.features.push(feat)
      })
    })
    merge(this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() =>{
        this.isLoadingResults = true;
        this.data_available = false;
        this.isLoading = true;
        let offset = 0
        let size = 30
        if(this.paginator['_isInitialized'] === false){
          offset = 0
          size = 30
        }else{
          offset = this.paginator.pageSize * this.paginator.pageIndex
          size = this.paginator.pageSize
        }
        
        return this.datasetApi.getDataEntryPaginated(this.datasetToSee._id, offset, size);
      } ),
      map(data =>{
        return data
      }),
      catchError(err =>{
        return observableOf([])
      })
    ).subscribe((data:Dataset) => {
      this.dataSource = this.datasetViewService.createViewData(data , 10);
      this.data_available = true;
      this.isLoadingResults = false;
    })
  }


  closeDataset(){
    
  }

  useDataset(){
  }

  featChanged(feat:Feature){
    if(this.featsChanged.includes(feat) === false){
      this.featsChanged.push(feat)
      this.featsChangedArray.next(this.featsChanged)
    }
  }

  // trackByFn(index, item){
  //   console.log(item._id)
  //   return index;
  // }

}
