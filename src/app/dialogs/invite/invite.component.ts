import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {

  email:string = "";
  message:string = "";

  sent:boolean = false;

  constructor(
    public dialModalRef: MatDialogRef<InviteComponent>
  ) { }

  ngOnInit(): void {
  }

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  onSent(){
    let invite = {}
    invite['email'] = this.email
    invite['message'] = this.message
    this.dialModalRef.close(invite)
  }

  onEnterVal(){
    if(this.emailFormControl.status === 'VALID'){
      this.sent = true
    }
  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
