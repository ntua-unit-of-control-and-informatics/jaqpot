import {Component,OnInit,ElementRef, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {OidcSecurityService} from 'angular-auth-oidc-client';
import {SessionService} from '../session/session.service';
import {DialogsService} from '../dialogs/dialogs.service';
import { DatasetFactoryService } from '../jaqpot-client/factories/dataset-factory.service';
import { FeatureApiService } from '../jaqpot-client/api/feature.service';
import { DatasetService } from '../jaqpot-client/api/dataset.service';
import { Dataset, Model } from '../jaqpot-client';
import { ModelApiService } from '../jaqpot-client/api/model.service';
import { UserService } from '../jaqpot-client/api/user.service';
// import { NgxPicaService, NgxPicaResizeOptionsInterface, NgxPicaErrorInterface } from '@digitalascetic/ngx-pica';
// import { AspectRatioOptions } from '@digitalascetic/ngx-pica/src/ngx-pica-resize-options.interface';
import { FeatureFactoryService } from '../jaqpot-client/factories/feature-factory.service';
import { DatasetToViewdataService } from '../services/dataset-to-viewdata.service';
import { HttpParams } from '@angular/common/http';
import { ViewItem } from './data-model-view/data-model-view.component';
import { LegacyPageEvent as PageEvent, MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { User } from '@euclia/accounts-client/dist/models/user';
import { Organization } from '@euclia/accounts-client/dist/models/models';
import { OrganizationService } from '../jaqpot-client/api/organization.service';


import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

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

  @ViewChild('dataInput')
  dataInput: ElementRef;

  listView = true;
  query: string = "Mine"
  queries_enabled: boolean = false;
  queries_for: string
  add_dataset: boolean = false;
  trash_view:boolean = false;

  datasets_to_view:Dataset[] = []
  models_to_view:Model[] = []
  view_type:string = "list"
  quick_view:boolean = true;
  // organizations:string[];
  organizations:Array<Organization>;
  organizationsIds:Array<string>;

  organizationActivated:Organization = {title:"No organanization available"};
  // organizationActivated:Organization = {};
  viewItem:ViewItem;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  pageEvent: PageEvent;

  paginEnabled:boolean = false;
  totalEntities:number;



  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();


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
    public featFactory:FeatureFactoryService,
    public orgService:OrganizationService,
    public datasetToViewService:DatasetToViewdataService,
    // private ngxPicaService: NgxPicaService,
    private elRef: ElementRef) {

      this.dataSource.data = TREE_DATA;

  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
    let params:Map<string, any> = new Map();
    params.set("min", 0);
    params.set("max", 10);
    params.set("existence", Dataset.ExistenceEnum.UPLOADED)
    let pars = new HttpParams().set("min", "0").set("max", "10").set("existence", Dataset.ExistenceEnum.UPLOADED.toString());
    this.datasetApi.getList(pars).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })
    let model_params:Map<string, any> = new Map();
    model_params.set("min", 0);
    model_params.set("max", 40);
    let model_pars = new HttpParams().set("min", "0").set("max", "10");
    this.modelApi.getList(model_pars).subscribe((models:Model[])=>{
      this.models_to_view = models
    })
    
    var url_arr = this.router.url.split("/")
    if(url_arr[2] === 'shared'){
      this.quick_view = false
      this.queries_enabled = true
      this.queries_for === 'Models'
      if(url_arr[3] != "@Everyone" && url_arr[3] != 'undefined'){
        this.orgService.getOrgById(url_arr[3]).then(org=>{
          this.quick_view = false
          this.queries_for = "Models"
          this.organizationActivated = org
          this.sharedChosen()
        })
      }else if(url_arr[3] === "@Everyone"){
        this.queries_for = "Models"
        this.publicChosen()
      }else if(url_arr[3] === 'undefined'){
        this.location.replaceState("/home/shared/@Everyone")
        this.organizationActivated = {title:"No organanization available"}
        this.queries_for = 'Models'
        this.publicChosen()
      }

    }

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
    // this.location.replaceState("/home/shared/")
    this.query = "Shared";
    this.userApi.getUserById(this.sessionService.getUserId()).then(
      (user:User) => {
        // console.log(user)
        // let index = user.organizations.indexOf("Jaqpot")
        // user.organizations.splice(index, 1)
        this.organizations = []
        if(user.organizations){
          user.organizations.forEach((oId)=>{
            this.orgService.getOrgById(oId).then(o=>{
              this.organizations.push(o)
            })
          })
        }

        if(user.organizations){
          this.organizationsIds = user.organizations
          if(this.organizationsIds.length > 0){
            // this.organizationActivated = this.organizationsIds[0]
            this.orgService.getOrgById(this.organizationsIds[0]).then(o=>{
              if(this.organizationActivated.title === "No organanization available"){
                this.organizationActivated = o
              }
              this.location.replaceState("/home/shared/" + o._id)
              if(this.queries_for === 'Datasets'){
                this.fetchOrgsDatasets(0, 10, this.organizationActivated._id)
              }
              if(this.queries_for === 'Models'){
                this.fetchOrgsModels(0, 20, this.organizationActivated._id);
              }
            })
          }
        }

      }
    )
  }

  mineChosen() {
    this.location.replaceState("/home/")
    this.query = "Mine"
    this.organizationActivated = {title:"No organanization available"}
    delete this.organizations 
    if(typeof this.paginator != 'undefined'){
      this.paginator.firstPage()
    }
    if(this.queries_for === 'Datasets'){
      this.fetchDatasets(0, 10, Dataset.ExistenceEnum.UPLOADED)
    }
    if(this.queries_for === 'Models'){
      this.fetchModels(0, 20);
    }
  }


  publicChosen(){
    this.location.replaceState("/home/shared/@Everyone")
    this.query = "Public"
    this.organizationActivated = {title:"No organanization available"}
    delete this.organizations 
    if(typeof this.paginator != 'undefined'){
      this.paginator.firstPage()
    }
    if(this.query === 'Public'){
      this.fetchOrgsModels(0, 20, "@Everyone");
      // this.fetchModels(0, 20);
    }
  }


  goToDatasetView() {
    this.trash_view = false;
    this.paginEnabled = true;
    this.models_to_view = []
    
    if(this.organizationActivated.title != 'No organanization available'){
      this.fetchOrgsDatasets(0,10, this.organizationActivated._id)
    }else{
      this.fetchDatasets(0, 10, Dataset.ExistenceEnum.UPLOADED)
    }
    this.queries_for = "Datasets"
    this.quick_view = false
    this.queries_enabled = true
    this.add_dataset = true
    delete this.viewItem
    if(typeof this.paginator != 'undefined'){
      this.paginator.firstPage()
    }
  }

  goToModelView() {
    this.paginEnabled = true;
    this.trash_view = false;
    this.datasets_to_view = []
    
    if(this.organizationActivated.title != 'No organanization available'){
      this.fetchOrgsModels(0,20, this.organizationActivated._id)
    }else{
      this.fetchModels(0,20)
    }
    this.queries_for = "Models"
    this.query = "Mine"
    this.quick_view = false
    this.queries_enabled = true
    this.add_dataset = false
    delete this.viewItem
    if(typeof this.paginator != 'undefined'){
      this.paginator.firstPage()
    }
    
  }

  goToTrashView(){
    this.models_to_view = []
    this.datasets_to_view = []
    this.quick_view = false;
    this.queries_enabled = false;
    this.trash_view = true;
    this.fetchModelsOnTrash(0, 10);
    this.fetchDatasetsOnTrash(0, 10);
    if(typeof this.paginator != 'undefined'){
      this.paginator.firstPage()
    }
    delete this.viewItem
  }

  changeListener(files: FileList) {
    
    if (files && files.length === 1 && files.item(0).name.split(".")[1] === 'csv') {
      let reader: FileReader = new FileReader();
      let file: File = files.item(0);
      reader.readAsText(file);
      reader.onload = (e) => {
        var _csv = reader.result;
        _csv = _csv.toString()
        this.dialogsService.addCsvDataset(_csv, file.name,
          this.datasetFactory,
          this.featureApi,
          this.datasetApi).subscribe(result =>{
            reader.abort()
            this.fetchDatasets(0, 10, Dataset.ExistenceEnum.UPLOADED)
          })
      }
    }
    // else if(files && files.length > 1)
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
    }
    this.dataInput.nativeElement.value = "";

  }

  onPaginateChange(event){
    if(this.queries_for === 'Datasets'){
      let start:number = event.pageIndex * event.pageSize
      let max:number = event.pageIndex * event.pageSize + event.pageSize
      this.models_to_view = []
      if(this.organizationActivated.title != 'No organanization available'){
        this.fetchOrgsDatasets(start,max, this.organizationActivated._id)
      }else{
        this.fetchDatasets(start, max, Dataset.ExistenceEnum.UPLOADED)
      }
    }
    if(this.queries_for === 'Models'){
      let start:number = event.pageIndex * event.pageSize
      let max:number = event.pageIndex * event.pageSize + event.pageSize
      
      if(this.organizationActivated.title != 'No organanization available'){
        this.fetchOrgsModels(start, max, this.organizationActivated._id)
      }else{
        this.fetchModels(start,max)
      }
      if(this.trash_view === true){
        let start:number = event.pageIndex * event.pageSize
        let max:number = event.pageIndex * event.pageSize + event.pageSize
        this.totalEntities = 0
        this.fetchDatasetsOnTrash(start, max)
        this.fetchModelsOnTrash(start, max)
      }
    }


  }

  fetchDatasets(min:number, max:number, existence:Dataset.ExistenceEnum){
    this.datasets_to_view = []
    let params = new HttpParams()
          .set("start", min.toString())
          .set("max", max.toString())
          .set("existence", existence.toString());
    this.datasetApi.getList(params).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })
    this.datasetApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities = Number(counted.headers.get('total'))
    })

  }

  fetchModels(min:number, max:number){
    this.models_to_view = []
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString());
    this.modelApi.getList(params).subscribe((models:Model[]) => {
      this.models_to_view = models
    })
    this.modelApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities = Number(counted.headers.get('total'))
    })
  }


  fetchPublicModels(min:number, max:number){
    this.models_to_view = []
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString());
    this.modelApi.getList(params).subscribe((models:Model[]) => {
      this.models_to_view = models
    })
    this.modelApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities = Number(counted.headers.get('total'))
    })
  }

  fetchModelsOnTrash(min:number, max:number){
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString()).set("ontrash", "true");
    this.modelApi.getList(params).subscribe((models:Model[]) => {
      this.models_to_view = models
    })
    this.modelApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities = Number(counted.headers.get('total'))
    })
  }

  fetchDatasetsOnTrash(min:Number, max:Number){
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString()).set("ontrash", "true");
    this.datasetApi.getList(params).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })
    this.datasetApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities = Number(counted.headers.get('total'))
    })
  }

  fetchOrgsDatasets(min:Number, max:Number, organization:string){
    this.datasets_to_view = []
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString()).set("organization", organization);
    this.datasetApi.getList(params).subscribe((datasets:Dataset[]) => {
      this.datasets_to_view = datasets
    })
    this.datasetApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities  = Number(counted.headers.get('total'))
    })
  }

  fetchOrgsModels(min:Number, max:Number, organization:string){
    this.models_to_view = []
    this.location.replaceState("/home/shared/" + organization)
    let params = new HttpParams().set("start", min.toString()).set("max", max.toString()).set("organization", organization);
    this.modelApi.getList(params).subscribe((models:Model[]) => {
      this.models_to_view = models
    })
    this.modelApi.count(params).subscribe((counted:Response)=>{
      this.totalEntities  = Number(counted.headers.get('total'))
    })

  }


  orgChosen(org:Organization){
    this.organizationActivated = org
    if(this.queries_for === 'Datasets'){

      this.fetchOrgsDatasets(0, 10, org._id)
    }
    if(this.queries_for === 'Models'){
      this.fetchOrgsModels(0, 20, org._id);
    }
  }

  onItemClicked(event){
    this.viewItem = event
  }

}



interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Models',
    children: [{name: 'Mine'}
    , {
        name: 'Shared',
        children: [{name: "Org1"}]
      }
    , {name: 'Public'}],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
      },
      {
        name: 'Orange',
        children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
      },
    ],
  },
];