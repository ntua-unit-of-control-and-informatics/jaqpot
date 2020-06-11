import { Component, Optional, ViewEncapsulation, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ErrorReport } from '../../ui-models/errorReport'
import { SessionService } from '../../session/session.service';
import { Router} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-dialog',
  templateUrl: './account-dialog.component.html',
  styleUrls: ['./account-dialog.component.css'],
  encapsulation: ViewEncapsulation.None
  // providers: [Credentials]
})
export class AccountDialogComponent  implements OnInit{
    public errorReport: ErrorReport
    public id:string;
    public username:string;

    public familyName:string;
    public firstName:string;
    public email:string;
    public preferedUserName:string;
    public name:string;

    public edit_name_is_disabled:boolean;
    public edit_familyname_is_disabled:boolean;
    public edit_firstyname_is_disabled:boolean;
    public edit_preferedname_is_disabled:boolean;

    userDataSubscription: Subscription;
    userData: boolean;

    constructor(
        @Optional() public dialogRef: MatDialogRef<AccountDialogComponent>,
        private sessionService:SessionService,
        private router:Router,
        public oidcSecurityService: OidcSecurityService
        ){   }


    ngOnInit(){
        this.id = this.sessionService.get('subjectId');
        this.username = this.sessionService.get('userName');
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        this.name =userData.name
        this.familyName = userData.family_name;
        this.firstName = userData.given_name;
        this.email = userData.email;
        this.preferedUserName = userData.preferred_username;
        this.edit_name_is_disabled = true;
        this.edit_familyname_is_disabled = true;
        this.edit_firstyname_is_disabled = true;
        this.edit_preferedname_is_disabled = true;

    }

    // logout(){
    //     this.aaService.logout(this.id);
    //     this.router.navigate(['/'])
    //     this.sessionService.remove('loggedIn');
    //     this.sessionService.clear();
    //     this.dialogRef.close();
    // }

    close(){
        this.dialogRef.close();
    }


}
