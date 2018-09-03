import { Component, Inject , Optional} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatFormFieldControl, MAT_DIALOG_DATA , MatDialogRef} from '@angular/material';
// import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Credentials } from '../../ui-models/credentials';
import { AaService } from '../../jaqpot-client/api/aa.service';
import {NgModel} from '@angular/forms';
import { AuthToken } from '../../jaqpot-client';
import { ErrorReport } from '../../ui-models/errorReport'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css'],
  // providers: [Credentials]
})
export class LoginDialogComponent{

  
  // private _authToken:AuthToken;
  // private subjectId:string;
  ok = false;
  public errorReport: ErrorReport
  public credentials:Credentials = new Credentials();
  hide = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) credentials:Credentials,
    @Optional() public dialogRef: MatDialogRef<LoginDialogComponent>,
    private aaService:AaService,
    private router:Router
    ){   }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  login(event, credentials){

    this.aaService.login(credentials.username, credentials.password)
      .subscribe(
        authToken => {
          this.ok = true;
          this.dialogRef.close();
          this.router.navigate(['/home']);
        },
        err => this.errorReport = err,
        );

  }


}
