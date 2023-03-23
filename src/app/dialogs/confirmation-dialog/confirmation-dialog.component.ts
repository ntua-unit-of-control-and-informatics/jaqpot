import { Component, OnInit, Inject } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

  confirmationMessage:string;
  confirmationAction:string;

  constructor(public thisDialogRef: MatDialogRef<ConfirmationDialogComponent>) { }
  ngOnInit() {
  }

  onCloseConfirm() {
    this.thisDialogRef.close(true);
  }
  
  onCloseCancel() {
    this.thisDialogRef.close(false);
  }

}
