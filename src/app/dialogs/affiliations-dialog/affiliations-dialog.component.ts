import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { Organization } from '../../jaqpot-client/model/organization';
import { User } from '../../jaqpot-client';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../../session/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-affiliations-dialog',
  templateUrl: './affiliations-dialog.component.html',
  styleUrls: ['./affiliations-dialog.component.css']
})
export class AffiliationsDialogComponent implements OnInit {

  organizationApi:OrganizationService;
  notificationApi:NotificationService;
  notificationFactory:NotificationFactoryService;
  fromOrg:string;

  organizations:Organization[] = []
  orgsearch:string;

  addBodyB:boolean;
  requestMessage:string;

  orgActivated:string;

  constructor(
    private sessionService:SessionService,
    public snackBar: MatSnackBar
  ) {  }

  ngOnInit() {
  }

  inputChanged(orgname: string) {
    if(orgname.length > 1){
      this.organizations = []
      this.organizationApi.searchOrgById(orgname).subscribe((orgs:Organization[])=>{
        if(orgs.length > 0){
          orgs.forEach((org:Organization)=>{
            this.organizationApi.getWithIdSecured(org._id).subscribe((org:Organization) =>{
              if(org._id != this.fromOrg ){
                this.organizations.push(org)
              }
            })
          })
        }
      })
    }
  }


  request(){
    this.organizationApi.getWithIdSecured(this.orgsearch).subscribe((orgToRequest:Organization) =>{
      let userData = this.sessionService.getUserData()
      let notif = this.notificationFactory.affiliationNotification(userData.sub, orgToRequest.meta.creators[0], this.fromOrg, this.orgsearch, this.requestMessage)
      this.notificationApi.postEntity(notif).subscribe((not:Notification)=>{
        this.openSnackBar("Affiliation request created", "Ok");
      })
    })
  }

  addBody(){
    this.addBodyB = true;
  }

  cancelBody(){
    this.addBodyB = false;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}

