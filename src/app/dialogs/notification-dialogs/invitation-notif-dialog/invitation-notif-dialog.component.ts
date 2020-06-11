import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../jaqpot-client/api/notification.service';
import { OrganizationService } from '../../../jaqpot-client/api/organization.service';
import { UserService } from '../../../jaqpot-client/api/user.service';
import { Notification } from '../../../jaqpot-client/model/notification';
import { User } from '../../../jaqpot-client';
import { Organization } from '../../../jaqpot-client/model/organization';
import { MatDialogRef } from '@angular/material/dialog';
import {MatSnackBar } from '@angular/material/snack-bar'

@Component({
  selector: 'app-invitation-notif-dialog',
  templateUrl: './invitation-notif-dialog.component.html',
  styleUrls: ['./invitation-notif-dialog.component.css']
})
export class InvitationNotifDialogComponent implements OnInit {

  notification:Notification

  notificationService:NotificationService
  organizationService:OrganizationService
  userService:UserService

  openedFrom:string

  from: User
  me: User

  organ: Organization

  constructor(public snackBar: MatSnackBar, private dialogRef: MatDialogRef<InvitationNotifDialogComponent>) { }

  ngOnInit() {
    this.userService.getUserById(this.notification.from).subscribe(user =>{
      this.from = user
    })

    this.organizationService.getWithIdSecured(this.notification.invitationTo).subscribe(organization =>{
      this.organ = organization
    })

  }

  acceptInvitation(){
    this.userService.getUserById(this.notification.owner).subscribe(user => {
      this.me = user
      if(!this.me.organizations.some(c => c === this.organ._id)){
        this.me.organizations.push(this.organ._id)
        this.userService.putWithIdSecured(this.me._id, this.me).subscribe(userUpdated => {
          this.me = userUpdated
          this.organ.userIds.push(this.me._id)
          this.organizationService.putEntitySecured(this.organ).subscribe(organUpdated => {
            this.openSnackBar("You are now a member of the Organization" + this.organ._id, "Congrats!")
          })
          this.notification.viewed = true;
          this.notificationService.putEntitySecured(this.notification).subscribe(notif =>{
            
          })
        })
      }else{
        this.notification.viewed = true;
        this.notificationService.putEntitySecured(this.notification).subscribe(notif =>{
          this.openSnackBar("Seems to be allready a member of this organization", "Notification Resolved")
        })
      }
    })

  }

  declineInvitation(){
    this.notification.viewed = true;
    this.notificationService.putEntitySecured(this.notification).subscribe(notif =>{
      this.openSnackBar("You have declined invitation", "Notification Resolved")
    })
  }

  resolveNotification(){
    this.notification.viewed = true;
    this.notificationService.putEntitySecured(this.notification).subscribe(notifNew=>{
      this.openSnackBar("Notification won't appear any more", "")
    })
  }

  deleteNotification(){
    this.notificationService.deleteEntityWithID(this.notification._id).subscribe(notifNew=>{
      this.dialogRef.close('deleted')
      this.openSnackBar("Notification deleted", "")
    })
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

}
