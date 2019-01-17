import { Component, OnInit } from '@angular/core';
import { Organization } from '../../jaqpot-client/model/organization';
import { ActivatedRoute, Router, NavigationEnd } from '../../../../node_modules/@angular/router';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { ProfilepicDialogComponent } from '../../dialogs/profilepic-dialog/profilepic-dialog.component';
import { Subject } from '../../../../node_modules/rxjs';
import { DialogsService } from '../../dialogs/dialogs.service';
import { MetaInfo, User, Model } from '../../jaqpot-client';
import { Session } from 'protractor';
import { SessionService } from '../../session/session.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';

@Component({
  selector: 'app-organization-base',
  templateUrl: './organization-base.component.html',
  styleUrls: ['./organization-base.component.css']
})
export class OrganizationBaseComponent implements OnInit {

  // editFromP:Subject<boolean> = new Subject();
  editFromP:boolean = false;

  creators:User[];
  contributors:User[];
  organization:Organization;
  edit = false;
  canedit = false;
  photo_unavail=true;
  edit_l = false;
  edit_w = false;
  edit_c = false;
  editabout = false;
  confirmationResult:boolean;


  affiliations:Organization[];
  website:string;
  entityMeta:MetaInfo;
  viewOrEdit:String = "view";
  canUpdatePhoto:boolean = false;
  editing:boolean = false;
  canDelete:boolean = false;

  navigationSubscription;

  thisOrg:string;

  orgmodels:Model[];

  constructor(
    public dialog: MatDialog,
    private notifApi:NotificationService,
    private route: ActivatedRoute,
    private organizationService:OrganizationService,
    private modelApi:ModelApiService,
    private datasetApi:DatasetService,
    private userApi:UserService,
    private router:Router,
    private sessionService:SessionService,
    private dialogsService:DialogsService,
    private notifFactory:NotificationFactoryService
  ) {  
    // this.navigationSubscription = this.router.events.subscribe(e=>{
    //   if (e instanceof NavigationEnd) {
    //     this.ngOnInit();
    //   }
    // })
   }

  ngOnInit() {
    const id = this.route.snapshot.params.id
    this.thisOrg = this.route.snapshot.params.id
    this.creators = []
    this.contributors = []
    this.organizationService.getWithIdSecured(id).subscribe((orgGot:Organization) =>{
        this.organization = orgGot
        if(typeof orgGot.website != 'undefined'){
          this.website = orgGot.website
        }
        if(typeof orgGot.affiliations != "undefined"){
          this.affiliations = []
          orgGot.affiliations.forEach(id =>{
            this.organizationService.getWithIdSecured(id).subscribe((org:Organization)=>{
              this.affiliations.push(org)
            })
          })
        }
        this.entityMeta = orgGot.meta
        var userData = this.sessionService.getUserData();
        if(userData.groups.includes('/Administrator') && this.organization._id === 'Jaqpot'){
          this.canedit = true;
          this.canUpdatePhoto = true;
        }
        if(this.organization.meta
           && this.organization.meta.creators
           && this.organization.meta.creators.includes(userData.sub) ||  this.organization.meta.contributors && this.organization.meta.contributors.includes(userData.sub)){
            this.canedit = true;
            this.canUpdatePhoto = true;
        }
        if(this.organization.meta && this.organization.meta.creators
          && this.organization.meta.creators.includes(userData.sub)){
            this.canDelete = true;
          }
        if(this.organization.meta.picture == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
        if(typeof orgGot.meta.creators  != 'undefined'){
          orgGot.meta.creators.forEach((userId:string) =>{
            this.userApi.getUserById(userId).subscribe((userGot:User) =>{
              if(!this.creators.includes(userGot)){
                this.creators.push(userGot)
              }
            })
          })
        }
        if(typeof orgGot.meta.contributors != 'undefined'){
          orgGot.meta.contributors.forEach((userId:string) =>{
            this.userApi.getUserById(userId).subscribe((userGot:User) =>{
              if(!this.contributors.includes(userGot)){
                this.contributors.push(userGot)
              }
            })
          })
        }
      }
    )
  }

  ngOnDestoy(){
    delete this.contributors
    delete this.creators
    delete this.organization
  }


  addOrgPicDialog(){
    let dialogRef = this.dialog.open(ProfilepicDialogComponent,{})
    dialogRef.afterClosed().subscribe(result => {
      this.organization.meta.picture = result;
      this.organizationService.putEntitySecured(this.organization)
      .subscribe(orgGot =>{
        this.organization = orgGot;
        if(this.organization.meta.picture == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
      })
    });
  }

  editForm(){
    this.viewOrEdit = "edit";
    this.editFromP = true;
    this.edit = true;
    this.edit_l = true;
    this.edit_w = true;
    this.edit_c = true;
    this.editing = true;
    this.editabout = true;
  }

  saveForm(){
    // this.editFromP.next(false)
    this.editFromP = false;
    this.edit = false;
    this.viewOrEdit = "view";
    this.editabout = false;
    this.editing = false;
    this.edit_l = false;
    this.edit_w = false;
    this.edit_c = false;
    this.organizationService.putEntitySecured(this.organization)
      .subscribe(orgGot =>{
        this.organization = orgGot;
        if(this.organization.meta.picture == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
    })
  }

  deleteOrg(){
    this.dialogsService.confirmDeletion("Are you sure you want to delete organization?", "DELETE").subscribe(result => {
      this.confirmationResult = result;
      if(result === true){
        this.organizationService.deleteEntity(this.organization._id)
        .subscribe(resp =>{
          this.router.navigate(["account"])
        })
      }
    });
  }

  updatePhoto(){
    this.dialogsService.updatePhoto(this.userApi, this.datasetApi, this.modelApi).subscribe((result) =>{
      if(result != undefined){
        this.organization.meta.picture = result
        this.organizationService.putEntitySecured(this.organization).subscribe((org:Organization) => {
          this.organization = org
        })
      }
      this.fetchOrganization()
    })
  }

  fetchOrganization(){
    const id = this.route.snapshot.params.id
    this.organizationService.getWithIdSecured(id).subscribe((orgGot:Organization) =>{
      this.organization = orgGot
      
      this.entityMeta = orgGot.meta
      var userData = this.sessionService.getUserData();
      if(userData.groups.includes('/Administrator') && this.organization._id === 'Jaqpot'){
        this.edit = true;
        this.canedit = true;
      }
      if(this.organization.meta
         && this.organization.meta.creators
         && this.organization.meta.creators.includes(userData.sub) || this.organization.meta.contributors.includes(userData.sub)){
          this.edit = true;
          this.canedit = true;
          this.canUpdatePhoto = true;
      }
      if(this.organization.meta.picture == null){
        this.photo_unavail = true;
      }else{
        this.photo_unavail = false;
      }
    })
  }

  addAdministrator(){
    let users:string[] = this.organization.userIds.slice()
    let index = users.indexOf(this.organization.meta.creators[0], 0)
    if(index > -1){
      users.splice(index , 1)
    }
    if(typeof this.organization.meta.contributors != 'undefined'){
      this.organization.meta.contributors.forEach(id =>{
        let index2 = users.indexOf(id)
        if(index2 > -1){
          users.splice(index2, 1)
        }
      })
    }
    this.dialogsService.addAdministrator(users,this.organization.meta.contributors, this.userApi).subscribe((result:User[]) =>{
      if(typeof result != 'undefined'){
        if(result.length === 0 ){
          this.contributors = []
          this.organization.meta.contributors = []
        }
        this.contributors = result
        this.contributors.forEach((user:User) =>{
          if(typeof this.organization.meta.contributors === 'undefined'){
            this.organization.meta.contributors = []
            this.organization.meta.contributors.push(user._id)
          }else{
            this.organization.meta.contributors.push(user._id)
          }
        })
      }
    })
  }

  markdownChanged(event){
    this.organization.meta = event
  }

  openUserDialog(user:User){
    this.dialogsService.quickUser(this.userApi, user)
  }
  
  addAffiliations(){
    const fromOrg = this.route.snapshot.params.id
    this.dialogsService.openAffiliationRequest(this.organizationService, this.notifApi, this.notifFactory, fromOrg);
  }

  onOrgClicked(organization: Organization){
    
    this.dialogsService.onOrganizationView(organization, this.organizationService, false)
    
  }


  removeAffiliation(organizationClicked: Organization){
    this.dialogsService.confirmDeletion("Are you sure you want to remove affiliation", "REMOVE").subscribe(result =>{
      if(result === true){        
        let ind = organizationClicked.affiliations.indexOf(this.thisOrg)
        if(ind>-1){
          organizationClicked.affiliations.splice(ind, 1)
        }
        let ind2 = this.organization.affiliations.indexOf(organizationClicked._id)
        if(ind2 > -1){
          this.organization.affiliations.splice(ind2, 1)
        }
        let orgsToUp:Organization[] = []
        orgsToUp.push(organizationClicked)
        orgsToUp.push(this.organization)
        this.organizationService.removeAffiliation(orgsToUp).subscribe(resp =>{
          this.ngOnInit()
        })
      }
    })
  }

}
