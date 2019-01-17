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

  shareNotification(from:string, to:string, throuOrg:string, entityID:string){
    let entity:string[] = entityID.split("/")
    let body =  entity[entity.length - 2] + " shared through organization " + throuOrg;
    let notifBuilder = new NotificationBuilderService()
    notifBuilder.setFrom(from);
    notifBuilder.setBody(body);
    notifBuilder.setTo(to);
    notifBuilder.setOwner(to);
    notifBuilder.setType(TYPE.SHARE);
    notifBuilder.setViewd(false);
    notifBuilder.setEntityShared(entityID)
    notifBuilder.setThroughOrg(throuOrg)
    this.notification = notifBuilder.build()
    return this.notification;
  }

  affiliationNotification(from:string, to:string, throuOrg:string, affOrg:string, body:string){
    let notifBuilder = new NotificationBuilderService()
    notifBuilder.setOwner(to);
    notifBuilder.setFrom(from);
    notifBuilder.setTo(to);
    notifBuilder.setType(TYPE.AFFILIATION)
    notifBuilder.setViewd(false);
    notifBuilder.setThroughOrg(throuOrg)
    notifBuilder.setAffiliatedOrg(affOrg)
    if(typeof body != 'undefined'){
      notifBuilder.setBody(body)
    }else{
      notifBuilder.setBody("Request to make an affiliation");
    }
    this.notification = notifBuilder.build()
    return this.notification
  }

}
