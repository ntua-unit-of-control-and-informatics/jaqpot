import { Component, OnInit } from '@angular/core';
import { Notification } from '../../../jaqpot-client/model/notification';
import { OrganizationService } from '../../../jaqpot-client/api/organization.service';
import { NotificationService } from '../../../jaqpot-client/api/notification.service';
import { UserService } from '../../../jaqpot-client/api/user.service';
import { ModelApiService } from '../../../jaqpot-client/api/model.service';
import { DatasetService } from '../../../jaqpot-client/api/dataset.service';
import { User, MetaInfo, Dataset, Model } from '../../../jaqpot-client';
import { Organization } from '../../../jaqpot-client/model/organization';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share-notif-dialog',
  templateUrl: './share-notif-dialog.component.html',
  styleUrls: ['./share-notif-dialog.component.css']
})
export class ShareNotifDialogComponent implements OnInit {

  _notification:Notification
  _organizationApi:OrganizationService
  _notificationApi:NotificationService
  _userApi:UserService
  _modelApi:ModelApiService
  _datasetApi:DatasetService


  from:User
  organ:Organization
  entityMeta:MetaInfo

  constructor(public snackBar: MatSnackBar, private _router:Router) { }

  ngOnInit() {
    this._userApi.getUserById(this._notification.from).subscribe((user:User)=>{
      this.from = user
    })
    this._organizationApi.getWithIdSecured(this._notification.organizationShared).subscribe((org:Organization) =>{
      this.organ = org
    })
    if(this._notification.entityShared.split("/")[0] === "dataset"){
      this._datasetApi.getWithIdSecured(this._notification.entityShared.split("/")[1]).subscribe((data:Dataset)=>{
        this.entityMeta = data.meta
      })
    }
    if(this._notification.entityShared.split("/")[0] === "model"){
      this._modelApi.getWithIdSecured(this._notification.entityShared.split("/")[1]).subscribe((model:Model)=>{
        this.entityMeta = model.meta
      })
    }
  }

  goToEntity(){
    this._router.navigate([this._notification.entityShared]);
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
