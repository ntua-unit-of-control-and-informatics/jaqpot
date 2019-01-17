import { Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../jaqpot-client/api/organization.service';
import { NotificationService } from '../../../jaqpot-client/api/notification.service';
import { UserService } from '../../../jaqpot-client/api/user.service';
import { ModelApiService } from '../../../jaqpot-client/api/model.service';
import { DatasetService } from '../../../jaqpot-client/api/dataset.service';
import { Notification } from '../../../jaqpot-client/model/notification';
import { User } from '../../../jaqpot-client';
import { Organization } from '../../../jaqpot-client/model/organization';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-affiliation-notif',
  templateUrl: './affiliation-notif.component.html',
  styleUrls: ['./affiliation-notif.component.css']
})
export class AffiliationNotifComponent implements OnInit {

  _notification:Notification
  _organizationApi:OrganizationService
  _notificationApi:NotificationService
  _userApi:UserService
  _modelApi:ModelApiService
  _datasetApi:DatasetService

  from:User
  organToAffiliate:Organization
  yourOrgan:Organization

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this._userApi.getUserById(this._notification.from).subscribe(user =>{
      this.from = user
    })

    this._organizationApi.getWithIdSecured(this._notification.organizationShared).subscribe(organization =>{
      this.organToAffiliate = organization
    })
    this._organizationApi.getWithIdSecured(this._notification.affiliatedOrg).subscribe(organization =>{
      this.yourOrgan = organization
    })

  }

  acceptInvitation(){
    if(typeof this.organToAffiliate.affiliations === 'undefined'){
      this.organToAffiliate.affiliations = []
    }
    if(typeof this.yourOrgan.affiliations === 'undefined'){
      this.yourOrgan.affiliations = []
      this.yourOrgan.affiliations.push(this.organToAffiliate._id)
      this._organizationApi.putEntitySecured(this.yourOrgan).subscribe((organ:Organization)=>{
        this.organToAffiliate
        if(typeof this.organToAffiliate.affiliations === 'undefined'){
          this.organToAffiliate.affiliations = []
          this.organToAffiliate.affiliations.push(this.yourOrgan._id)
          this._organizationApi.putEntitySecured(this.organToAffiliate).subscribe((org:Organization)=>{
            this.snackBar.open("Affiliation created", "Ok");
            this.ngOnInit()
          })
        }else if(!this.yourOrgan.affiliations.includes(this.organToAffiliate._id)){
          this.organToAffiliate.affiliations.push(this.yourOrgan._id)
          this._organizationApi.putEntitySecured(this.organToAffiliate).subscribe((org:Organization)=>{
            this.snackBar.open("Affiliation created", "Ok");
            this.ngOnInit()
          })
        }
      })
    }else if(!this.organToAffiliate.affiliations.includes(this.yourOrgan._id)){ 
      this.yourOrgan.affiliations.push(this.organToAffiliate._id)
      this._organizationApi.putEntitySecured(this.yourOrgan).subscribe((organ:Organization)=>{
        this.organToAffiliate
        if(typeof this.organToAffiliate.affiliations === 'undefined'){
          this.organToAffiliate.affiliations = []
          this.organToAffiliate.affiliations.push(this.yourOrgan._id)
          this._organizationApi.putEntitySecured(this.organToAffiliate).subscribe((org:Organization)=>{
            this.snackBar.open("Affiliation created", "Ok");
            this.ngOnInit()
          })
        }else{
          this.organToAffiliate.affiliations.push(this.yourOrgan._id)
          this._organizationApi.putEntitySecured(this.organToAffiliate).subscribe((org:Organization)=>{
            this.snackBar.open("Affiliation created", "Ok");
            this.ngOnInit()
          })
        }
      })
    }else{
      this.snackBar.open("Your Organizations are probably allready affiliated", "Ok");
    }
  }


  declineInvitation(){
    this._notification.viewed = true;
    this._notificationApi.putEntitySecured(this._notification).subscribe(notif =>{
      this.openSnackBar("You have declined invitation", "Notification Resolved")
    })
  }

  resolveNotification(){
    this._notification.viewed = true;
    this._notificationApi.putEntitySecured(this._notification).subscribe(notifNew=>{
      this.openSnackBar("Notification won't appear any more", "")
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
