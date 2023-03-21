import { Injectable } from '@angular/core';
import { Meta, Organization } from '@euclia/accounts-client';


@Injectable({
  providedIn: 'root'
})
export class OrganizationBuilderService {

  public organization:Organization

  constructor() {
    this.organization = <Organization>{}
   }

  setTitle(title:string){
    this.organization.title = title
    return this
  }

  setCreator(creatorId:string){
    this.organization.creator = creatorId
    return this
  }

  initMeta(){
    let _meta =<Meta>{}    
    this.organization.meta = _meta
    this.organization.meta.date = Date.now()
    return this
  }

  setAdmins(admin:string){
    let _admins = []
    _admins.push(admin)
    this.organization.admins = _admins
    return this
  }

  addUser(user:string){
    let _users = []
    _users.push(user)
    this.organization.users = _users
    return this
  }

  build(){
    return this.organization
  }
  
}
