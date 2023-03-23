import { Component, OnInit } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  message:string

  constructor(
    private dialogRef: MatDialogRef<ConfirmationComponent>
  ) { }

  ngOnInit(): void {
  }

  onYes(){
    this.dialogRef.close('YES')
  }

  onCancel(){
    this.dialogRef.close('CANCEL')
  }

}
