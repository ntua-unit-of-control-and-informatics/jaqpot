import { Component, OnInit } from '@angular/core';
import { Invitation } from '../ui-models/invitation';
import { DialogsService } from '../dialogs/dialogs.service';
import { HttpParams } from '@angular/common/http';
import { interval } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { InvitationsService } from '../accounts-api/invitations.service';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {

  _invitations:Invitation[] = []

  _totalNew:Number

  constructor(private _invitationsApi:InvitationsService,
    private _SessionService:SessionService,
    private _dialogs:DialogsService) { }

  ngOnInit(): void {
    let httpParams = new HttpParams().set("min", "").set("max","").set("email", this._SessionService.getUserEmail()).set("viewed", "false");
    interval(10000).pipe(
      startWith(0),
      switchMap(() => this._invitationsApi.countInvitations(httpParams))
    ).subscribe(t => {
      this._totalNew = t.headers.get('total');
    })
  }

  viewInvitations(){
    this._dialogs.viewInvitations(this._invitationsApi, this._SessionService)
  }

}
