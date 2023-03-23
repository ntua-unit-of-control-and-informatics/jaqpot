import { Component, Input, OnInit } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { User } from '@euclia/accounts-client';
import { RequestsService } from '../../accounts-api/requests.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { SessionService } from '../../session/session.service';

@Component({
  selector: 'app-quots',
  templateUrl: './quots.component.html',
  styleUrls: ['./quots.component.css']
})
export class QuotsComponent implements OnInit {

  @Input() user:User

  academic:boolean = false;

  constructor(
    private _session:SessionService,
    private _dialogsService:DialogsService,
    private _requestApi:RequestsService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

  }

  viewUser(){
    console.log(this.user)
  }

  request(){
    this._dialogsService.onRequest().subscribe(r=>{
      if(r){
        let requestCredits:Request = {
          fromUser : this._session.getUserId(),
          userEmail : this._session.getUserEmail(),
          message: r
        }
        this._requestApi.post(requestCredits).subscribe(resp=>{
          if(resp){
            this._snackBar.open("Request for credits have been sent", "Ok", {
              duration: 3000,
            });
          }
        })
      }
    })
  }

}


export interface Request{
  fromUser:string
  userEmail:string
  message:string
}