import { Component, Inject , Optional} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Credentials } from '../../ui-models/credentials';
import { AaService } from '../../jaqpot-client/api/aa.service';
import {NgModel} from '@angular/forms';
import { AuthToken } from '../../jaqpot-client';
import { ErrorReport } from '../../ui-models/errorReport'
import { SessionService } from '../../session/session.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout-dialog',
  templateUrl: './logout-dialog.component.html',
  styleUrls: ['./logout-dialog.component.css'],
  // providers: [Credentials]
})
export class LogoutDialogComponent  implements OnInit{
    public errorReport: ErrorReport
    public id:string;
    public username:string;
    hide = true;

    constructor(
        @Optional() public dialogRef: MatDialogRef<LogoutDialogComponent>,
        private aaService:AaService, 
        private sessionService:SessionService,
        private router:Router
        ){   }


    ngOnInit(){
        this.id = this.sessionService.get('subjectId');
        this.username = this.sessionService.get('userName');
    }

    logout(){
        this.aaService.logout(this.id);
        this.router.navigate(['/'])
        this.sessionService.remove('loggedIn');
        this.sessionService.clear();
        this.dialogRef.close();
    }


}
