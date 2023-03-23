import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { Dataset } from '../../jaqpot-client/model/dataset';
import { Subscription ,  BehaviorSubject ,  merge } from 'rxjs';
import { MatLegacyPaginator as MatPaginator} from '@angular/material/legacy-paginator';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { SessionService } from '../../session/session.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { Router } from '@angular/router';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';

@Component({
  selector: 'app-dataset-list',
  templateUrl: './dataset-list.component.html',
  styleUrls: ['./dataset-list.component.css']
})
export class DatasetListComponent implements OnInit {

  private _dataset:Dataset;


  public visible:boolean = true;
  private _datasets:Dataset[];
  private _count:string;
  subscription:Subscription;

  public data_in : string;
  private data_to_fetch = new BehaviorSubject(0);
 
  displayedColumns = ['Titles', 'Descriptions', 'Subjects'];
  // dataSource = new MatTableDataSource<Dataset>(this._datasets);

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;



  constructor(private _dataService:DatasetService,
        private _sessionService:SessionService,
        private _dialogsService:DialogsService,
        private _router:Router){

          // this.subscription = this._sessionService.getDataset()
          //     .subscribe(dataset =>{
          //       if(dataset === undefined){
          //         this.visible = true;
          //       }else{
          //         this.visible = false;
          //       }
          //     })
    
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;


  ngOnInit() {
    // this.getFeaturedCount();
    // this.data_in = 'Featured';
  }

  ngAfterViewInit() {
    
        // merge(this.data_to_fetch, this.paginator.page)
        //   ,startWith(null)
        //   ,switchMap(() => {
        //     this.isLoadingResults = true;
        //     if(this.data_in === 'Featured'){
        //       this.getFeaturedCount();
        //       return this._dataService.getFeaturedDatasets(
        //         this.paginator._pageIndex * this.paginator.pageSize,
        //         this.paginator.pageSize);
        //     }else{
        //       this.getAllCount();
        //       return this._dataService.getAllDatasets(
        //         this.paginator._pageIndex * this.paginator.pageSize,
        //         this.paginator.pageSize);
        //     }
            
        //     }),map(data => {
        //       this.isLoadingResults = false;
        //       this.isRateLimitReached = false;
        //       this.resultsLength = Number(this._count);
        //       return data
        //     })
            // .catch(() => {
            //   this.isLoadingResults = false;
            //   this.isRateLimitReached = true;
            //   return Observable.of([]);
            // })
            // ,subscribe(data => this.dataSource.data = data);
    
  }

  // getFeaturedCount(){
  //   this._dataService.getFeaturedDatasetCount()
  //   .subscribe(res => {
  //     this._count = res.headers.get('total');
  //   })    
  // }

  // getAllCount(){
  //   this._dataService.getAllDatasetCount()
  //     .subscribe(res => {
  //       this._count = res.headers.get('total');
  //     })
  // }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    // this.dataSource.filter = filterValue;
  }

  changeDatasets(value){
    this.data_in = value;
    this.data_to_fetch.next(0);
  }

  onSelect(dataset:Dataset){
    // this._sessionService.setDataset(dataset);
    this.navigate();
    
  }

  navigate(){
    this._router.navigate(['/dataset/detail']);
  }
  
}
