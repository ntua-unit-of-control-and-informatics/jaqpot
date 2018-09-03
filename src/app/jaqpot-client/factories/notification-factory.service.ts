import { Injectable } from '@angular/core';
import { NotificationBuilderService } from '../builders/notification-builder.service';
import { Notification, TYPE } from '../model/notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationFactoryService {

  notification:Notification

  constructor(
  ) { }

  emptyNotification(){
    let notifBuilder = new NotificationBuilderService()
    this.notification = notifBuilder.build()
    return this.notification
  }

  invitationNotification(from:string, to:string, invitationToOrg:string){
    let body = "Invitation to become a member of the Organization " + invitationToOrg;
    let notifBuilder = new NotificationBuilderService()
    notifBuilder.setFrom(from);
    notifBuilder.setBody(body);
    notifBuilder.setTo(to);
    notifBuilder.setOwner(to);
    notifBuilder.setType(TYPE.INVITATION);
    notifBuilder.setOrganizationInv(invitationToOrg)
    notifBuilder.setViewd(false);
    this.notification = notifBuilder.build()
    return this.notification;
  }

}
