import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, UrlSerializer } from '@angular/router';
import { SessionService } from '../../session/session.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { Model, MetaInfo, User, Feature } from '../../jaqpot-client';
import { DialogsService } from '../../dialogs/dialogs.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { RightsService } from '../../services/rights.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';

@Component({
  selector: 'app-model-id',
  templateUrl: './model-id.component.html',
  styleUrls: ['./model-id.component.css']
})
export class ModelIdComponent implements OnInit, OnDestroy {

  navigationSubscription;

  id:string;
  entityId:string;

  user:User;
  modelToSee:Model;
  modelOwner:User;

  canUpdatePhoto:boolean = false;

  edit:boolean = false;
  canEdit:boolean = false;
  save:boolean = false;
  viewOrEdit:string = "view"

  entityMeta:MetaInfo;

  featsUpdatedArray:Feature[]

  constructor(
    private rightsService:RightsService,
    private router:Router,
    private route: ActivatedRoute,
    private sessionService:SessionService,
    private modelApi:ModelApiService,
    private featureApi:FeatureApiService,
    private dialogsService:DialogsService,
    private userApi:UserService,
    private datasetApi:DatasetService,
    private organizationApi:OrganizationService,
    private notificationService:NotificationService,
    private notificationFactory:NotificationFactoryService
  ) { 
    this.navigationSubscription = this.router.events.subscribe(e=>{
      if (e instanceof NavigationEnd) {
        this.ngOnInit();
      }
    })
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id
    this.entityId = "model/" + this.id
    this.modelApi.getWithIdSecured(this.id).subscribe((model:Model) =>{
      this.modelToSee = model;
      this.entityMeta = model.meta;
      this.userApi.getUserById(this.sessionService.getUserId()).subscribe((user:User)=>{
        this.user = user
        this.edit = this.rightsService.canEdit(model.meta, user);
        this.canEdit = this.rightsService.canEdit(model.meta, user);
        this.canUpdatePhoto = this.edit
        this.userApi.getUserById(this.modelToSee.meta.creators[0]).subscribe((owner:User)=>{
          this.modelOwner = owner
        })
      })
    })
  }

  ngOnDestroy(){
    if (this.navigationSubscription) {  
      this.navigationSubscription.unsubscribe();
   }
  }

  updatePhoto(){
    this.dialogsService.updatePhoto(this.modelApi, this.modelApi, this.userApi).subscribe((result) =>{
      if(result != undefined){
        this.modelToSee.meta.picture = result
        this.modelApi.putMeta(this.modelToSee).subscribe((res:MetaInfo) => {
          this.modelToSee.meta = res
        })
      }
      this.fetchModel()
    })
  }

  fetchModel(){
    this.modelApi.getWithIdSecured(this.id).subscribe((model:Model) =>{
      this.modelToSee = model
      if(model.meta.creators.includes(this.sessionService.getUserId()) 
        || typeof model.meta.write != 'undefined' && this.user.organizations.forEach(org =>{
          model.meta.write.includes(org)
        })){
        
        this.edit = true;
        this.canUpdatePhoto = true;
      }
    })
  }


  quickView(){
    if(this.viewOrEdit === "edit"){
      this.viewOrEdit = "view"
    }else{
      this.viewOrEdit = "edit"
    }
  }

  openUser(){
    this.dialogsService.quickUser(this.userApi, this.modelOwner)
  }


  share(){
    this.dialogsService.openSharingDialog("model"
        , this.entityId
        , this.modelApi
        , this.datasetApi
        , this.organizationApi
        , this.notificationService
        , this.notificationFactory
        , this.userApi
        , this.sessionService.getUserId()).subscribe(resp =>{
          this.modelApi.getWithIdSecured(this.id).subscribe((model:Model)=>{
            this.modelToSee = model;
          })
        });
  }

  editAll(){
    this.edit = false;
    this.save = true;
    this.viewOrEdit = "edit";
  }


  markdownChanged(meta){
    this.modelToSee.meta = meta
  }

  datasetChanged(dataset){
    this.modelToSee = dataset
  }

  featsUpdated(feats:Feature[]){
    this.featsUpdatedArray = feats
  }

  saveAll(){
    this.save = false;
    this.edit = true;
    this.viewOrEdit = "view";
    if(typeof this.featsUpdatedArray != 'undefined'){
      this.featsUpdatedArray.forEach((feat:Feature)=>{
        this.featureApi.putWithIdSecured(feat._id.toString(), feat).subscribe((feat:Feature)=>{
        })
      })
    }
    this.modelApi.putMeta(this.modelToSee).subscribe((res:MetaInfo) => {
      this.modelToSee.meta = res
    })
    
  }

  modelChanged($event){

  }


}
