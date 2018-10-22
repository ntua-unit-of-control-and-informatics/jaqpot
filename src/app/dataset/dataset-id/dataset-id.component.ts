import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../session/session.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { Dataset, User } from '../../jaqpot-client';
import { UserService } from '../../jaqpot-client/api/user.service';
import { runInThisContext } from 'vm';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';
import { DialogsService } from '../../dialogs/dialogs.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';

@Component({
  selector: 'app-dataset-id',
  templateUrl: './dataset-id.component.html',
  styleUrls: ['./dataset-id.component.css']
})
export class DatasetIdComponent implements OnInit {

  datasetToSee:Dataset

  datasetOwner:User = {}

  canUpdatePhoto:boolean = true;

  edit:boolean = false;
  save:boolean = false;
  id:string

  constructor(
    private route: ActivatedRoute,
    private sessionService:SessionService,
    private datasetApi:DatasetService,
    public userApi:UserService,
    public modelApi:ModelApiService,
    public dialogsService:DialogsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.datasetApi.getPropertyWithIdSecured(this.id, 'meta').subscribe((dataset:Dataset) =>{
      this.datasetToSee = dataset
      if(dataset.meta.creators.includes(this.sessionService.getUserId())){
        this.edit = true;
        this.canUpdatePhoto = true;
      }
      this.userApi.getUserById(dataset.meta.creators[0]).subscribe((owned) =>{
        this.datasetOwner = owned
      })
    })
  }


  updatePhoto(){
    this.dialogsService.updatePhoto(this.datasetApi, this.modelApi, this.userApi).subscribe((result) =>{
      if(result != undefined){
        console.log(result)
      }else{
        console.log(result)
      }
      this.fetchDatasetAndUser()
    })
  }

  fetchDatasetAndUser(){
    this.datasetApi.getPropertyWithIdSecured(this.id, 'meta').subscribe((dataset:Dataset) =>{
      this.datasetToSee = dataset
      if(dataset.meta.creators.includes(this.sessionService.getUserId())){
        this.edit = true;
        this.canUpdatePhoto = true;
      }
      this.userApi.getUserById(dataset.meta.creators[0]).subscribe((owned) =>{
        this.datasetOwner = owned
      })
    })
  }

  openUser(){
    this.dialogsService.quickUser(this.userApi, this.datasetOwner)
  }

}
