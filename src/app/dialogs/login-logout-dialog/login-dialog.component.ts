import { Component, Inject , Optional} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';
import { Credentials } from '../../ui-models/credentials';
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
    private router:Router
    ){   }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  login(event, credentials){

    // this.aaService.login(credentials.username, credentials.password)
    //   .subscribe(
    //     authToken => {
    //       this.ok = true;
    //       this.dialogRef.close();
    //       this.router.navigate(['/home']);
    //     },
    //     err => this.errorReport = err,
    //     );

  }


}
