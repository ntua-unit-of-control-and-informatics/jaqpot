import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '../../../../node_modules/@angular/material';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {

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
