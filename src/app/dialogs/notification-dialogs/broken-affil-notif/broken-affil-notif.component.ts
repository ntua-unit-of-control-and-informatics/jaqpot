import { Component, OnInit } from '@angular/core';
import { Notification } from '../../../jaqpot-client/model/notification';
import { OrganizationService } from '../../../jaqpot-client/api/organization.service';
import { NotificationService } from '../../../jaqpot-client/api/notification.service';
import { UserService } from '../../../jaqpot-client/api/user.service';
import { ModelApiService } from '../../../jaqpot-client/api/model.service';
import { DatasetService } from '../../../jaqpot-client/api/dataset.service';
import { User } from '../../../jaqpot-client';
import { Organization } from '../../../jaqpot-client/model/organization';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-broken-affil-notif',
  templateUrl: './broken-affil-notif.component.html',
  styleUrls: ['./broken-affil-notif.component.css']
})
export class BrokenAffilNotifComponent implements OnInit {

  _notification:Notification
  _organizationApi:OrganizationService
  _notificationApi:NotificationService
  _userApi:UserService
  _modelApi:ModelApiService
  _datasetApi:DatasetService

  from:User
  brokeWith:Organization

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this._userApi.getUserById(this._notification.from).subscribe(user =>{
      this.from = user
    })

    this._organizationApi.getWithIdSecured(this._notification.affiliatedOrg).subscribe(organization =>{
      this.brokeWith = organization
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
