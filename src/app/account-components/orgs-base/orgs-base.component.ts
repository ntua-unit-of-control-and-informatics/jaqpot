import { HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Organization, User } from '@euclia/accounts-client';
import { InvitationsService } from '../../accounts-api/invitations.service';
import { OrganizationsApiService } from '../../accounts-api/organizations-api.service';
import { UsersApiService } from '../../accounts-api/userapi.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { SessionService } from '../../session/session.service';
import { Invitation } from '../../ui-models/invitation';
import { Meta } from '../../ui-models/meta';

@Component({
  selector: 'app-orgs-base',
  templateUrl: './orgs-base.component.html',
  styleUrls: ['./orgs-base.component.css']
})
export class OrgsBaseComponent implements OnChanges {

  @Input() isAdmin:boolean
  @Input() org:Organization
  @Output() saveOrg = new EventEmitter<Organization>();

  _creator:string

  _save:boolean = false

  @ViewChild(MatAccordion) accordion: MatAccordion;

  _orgUsers:User[] = []
  _ogrAdmins:User[] = []
  _totalUsers:Number
  _totalAdmins:Number
  tempContactType:string

  pageEvent

  constructor(
    private _userApi:UsersApiService,
    private _orgApi:OrganizationsApiService,
    private _dialogs:DialogsService,
    private _sessionService:SessionService,
    private _invitationService:InvitationsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnChanges() {
    this._save = false;
    if(this.org){
      if(this.org.users){
        this._totalUsers = this.org.users.length
      }else{
        this._totalUsers = 0
      }
      // console.log(this.org)
      this._creator = this.org.creator
      // this._totalUsers = 100
      // console.log(this._totalUsers)
    }
  }

  changes(){
    this._save = true;
  }

  save(){
    this.saveOrg.emit(this.org)
  }

  viewUsers(){
   this._orgUsers = []
   if(this.org.users){
    this.org.users.slice(0, 10).forEach(uId=>{
      let httpParams = new HttpParams().set("min", "").set("max","").set("email", "").set("id", uId);
        this._userApi.getUser(httpParams).subscribe(user=>{
          this._orgUsers.push(user[0])
        })
     })
   }
  }

  changeUsers(ev){
    let start = ev.pageIndex * 10
    let end = start + 10
    let i = start
    this._orgUsers = []
    while(i < end){
      let userId = this.org.users[i]
      if(userId){
        let httpParams = new HttpParams().set("min", "").set("max","").set("email", "").set("id", userId);
        this._userApi.getUser(httpParams).subscribe(user=>{
          this._orgUsers.push(user[0])
        })
      }
      i++;
    }
  }

  adminSelectedAction(ev){
    let ind = this.org.admins.indexOf(ev._id)
    if(ind > -1){
      this._dialogs.onMessage("User already is an admin")
    }else{
      this.org.admins.push(ev._id)
      this._orgApi.putEntitySecured(this.org).subscribe(org=>{
        this.org = org
        this._dialogs.onMessage("User added to admins")
      })
    }

  }

  removeUserAction(user){
    if(user._id === this._creator){
      this._dialogs.onMessage("Creator can not be removed from the organization")
    }else{
      this._dialogs.onConfirm("User will be removed from organization").subscribe(res=>{
        if(res === 'YES'){
          let ind = this.org.users.indexOf(user._id)
          this.org.users.splice(ind, 1)
          if(this.org.users.length === 0){
            this.org.users.push(this.org.creator)
          }
          this._orgApi.putEntitySecured(this.org).subscribe(org=>{
            this.org = org
            this._dialogs.onMessage("User removed from organization")
          })
        }
      })
    }
  }

  addUsage(){
    if(typeof this.org.contact === 'undefined' || this.org.contact ===  null){
      this.org.contacttypes = []
      this.org.contact = {}
    }
    if(typeof this.org.contacttypes === 'undefined' || this.org.contacttypes ===  null)
    this.tempContactType = '' 
    if(typeof this.org.contacttypes === 'undefined'){
      this.org.contacttypes = []
    }else{
      this.org.contacttypes.push('')
    }
    
  }

  onUsageTypeInput(event){
    this.tempContactType = event.target.value
  }

  addUsageType(){
    if(typeof this.org.contacttypes === 'undefined' ){
      this.org.contacttypes = []
    }
    let ind = this.org.contacttypes.indexOf(this.tempContactType)
    this.org.contacttypes.splice(ind, 1)
    this.org.contact[this.tempContactType] = ""
    this.org.contacttypes.push(this.tempContactType)
    this.tempContactType = ''
    this._save = false;
  }

  deleteUsage(usage){
    let index = this.org.contacttypes.indexOf(usage)
    this.org.contacttypes.splice(index, 1)
    delete this.org.contact[usage]
    this._save = true;
  }

  onContactTypeInput(event, usage){
    this.org.contact[usage] = event.target.value
    this._save = true;
  }

  viewAdmins(){
    this._totalAdmins = this.org.admins.length
    this._ogrAdmins = []
    if(this.org.admins){
     this.org.admins.slice(0, 10).forEach(uId=>{
       let httpParams = new HttpParams().set("min", "").set("max","").set("email", "").set("id", uId);
         this._userApi.getUser(httpParams).subscribe(user=>{
           this._ogrAdmins.push(user[0])
         })
      })
    }
  }

  removeAdmin(user:User){
    if(user._id === this._creator){
      this._dialogs.onMessage("Creator can not be removed from the organization")
    }else{
      this._dialogs.onConfirm("User will be removed from admins").subscribe(res=>{
        if(res === 'YES'){
          let index = this.org.admins.indexOf(user._id)
          this.org.admins.splice(index, 1)
          this._orgApi.putEntitySecured(this.org).subscribe(org=>{
            this.org = org
            this._dialogs.onMessage("User removed from admins")
            this.viewAdmins()
          })
        }
    })}
  }

  changeAdmins(ev){
    let start = ev.pageIndex * 10
    let end = start + 10
    let i = start
    this._orgUsers = []
    while(i < end){
      let userId = this.org.admins[i]
      if(userId){
        let httpParams = new HttpParams().set("min", "").set("max","").set("email", "").set("id", userId);
        this._userApi.getUser(httpParams).subscribe(user=>{
          this._orgUsers.push(user[0])
        })
      }
      i++;
    }
  }

  inviteUser(){
    this._dialogs.onInvite().subscribe(inv =>{
      let emailTo = inv['email']
      let messageTo = inv['message']
      let invit:Invitation = {}
      invit.Body = messageTo
      invit.EmailTo = emailTo
      invit.From = this._sessionService.getUserEmail()
      invit.InvitationTo = this.org.title
      invit.Viewed = false
      let meta:Meta = {}
      meta.date = Date.now()
      invit.Meta = meta
      invit.FromId = this._sessionService.getUserId()
      invit.InvitationToId = this.org._id
      this._invitationService.post(invit).subscribe(res =>{
        this._snackBar.open("Invitation have been sent", "Ok", {
          duration: 3000,
        });
      })
    })
  }


}
