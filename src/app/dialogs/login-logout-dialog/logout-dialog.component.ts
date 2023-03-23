import { Component, Inject , Optional, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { ErrorReport } from '../../ui-models/errorReport'
import { SessionService } from '../../session/session.service';
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
        private sessionService:SessionService,
        private router:Router
        ){   }


    ngOnInit(){
        this.id = this.sessionService.get('subjectId');
        this.username = this.sessionService.get('userName');
    }

    logout(){
        // this.aaService.logout(this.id);
        // this.router.navigate(['/'])
        // this.sessionService.remove('loggedIn');
        // this.sessionService.clear();
        // this.dialogRef.close();
    }


}
