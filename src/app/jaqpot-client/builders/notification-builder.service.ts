import { Injectable } from '@angular/core';
import { Notification, TYPE, ANSWER } from '../model/notification';


@Injectable({
  providedIn: 'root'
})
export class NotificationBuilderService {

  private notification:Notification;

  constructor() { 
    this.notification = <Notification>{}
  }

  setOwner(owner:string){
    this.notification.owner = owner
  }

  setFrom(from:string){
    this.notification.from = from
  }

  setTo(to:string){
    this.notification.to = to
  }

  setType(type:TYPE){
    this.notification.type = type.toString()
  }

  setAnswer(answer:ANSWER){
    this.notification.answer = answer.toString()
  }

  setBody(body:string){
    this.notification.body = body
  }

  setOrganizationInv(org:string){
    this.notification.invitationTo = org
  } 

  setEntityShared(entityId:string){
    this.notification.entityShared = entityId
  }

  setViewd(viewed:boolean){
    this.notification.viewed = viewed
  }

  build(){
    return this.notification
  }

}
