import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { InvitationsService } from '../../accounts-api/invitations.service';
import { HttpParams } from '@angular/common/http';
import { Invitation } from '../../ui-models/invitation';
import { SessionService } from '../../session/session.service';

@Component({
  selector: 'app-see-invitations',
  templateUrl: './see-invitations-component.component.html',
  styleUrls: ['./see-invitations-component.component.css']
})

export class SeeInvitationsComponentComponent implements OnInit {

  _invitationsApi:InvitationsService
  _sessionService:SessionService

  _invitations:Invitation[] = []
  _totalNew
  pageEvent

  constructor(
    public dialModalRef: MatDialogRef<SeeInvitationsComponentComponent>
  ) { }

  ngOnInit(): void {
    this.changePosition()
    this._invitations = []
    let httpParams = new HttpParams().set("min", "0").set("max","9").set("email", this._sessionService.getUserEmail()).set("viewed", "false");
    this._invitationsApi.getInvitations(httpParams).subscribe((invits:Invitation[]) =>{
      if(invits){
        invits.forEach(i =>{
          this._invitations.push(i)
        })
      }
    })
    this._invitationsApi.countInvitations(httpParams).subscribe(t=>{
      this._totalNew = t.headers.get('total');
    })
  }

  changePosition() {
    this.dialModalRef.updatePosition({ top: '50px', right: '60px' });
  }

  viewInvits(ev){
    let pageIndex:number = ev['pageIndex']
    let pageSize:number = ev['pageSize']
    let start = pageIndex * pageSize
    let max = 9
    this._invitations = []
    let httpParams = new HttpParams().set("min", start.toString()).set("max",max.toString()).set("email", this._sessionService.getUserEmail()).set("viewed", "false");
    this._invitationsApi.getInvitations(httpParams).subscribe((invits:Invitation[]) =>{
      if(invits){
        invits.forEach(i =>{
          this._invitations.push(i)
        })
      }
    })
  }


  accept(inv:Invitation){
    let params = new HttpParams().set('answer', 'accept')
    inv.Viewed = true
    this._invitationsApi.putWithParamsEntitySecured(inv, params).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    })
  }

  decline(inv:Invitation){
    let params = new HttpParams().set('answer', 'decline')
    inv.Viewed = true
    this._invitationsApi.putWithParamsEntitySecured(inv, params).subscribe(res=>{
      if(res){
        this.ngOnInit()
      }
    })
  }


}
