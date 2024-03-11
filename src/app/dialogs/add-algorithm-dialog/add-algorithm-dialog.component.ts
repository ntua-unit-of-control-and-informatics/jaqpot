import { Component, OnInit, Optional } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Algorithm } from '../../jaqpot-client/model/algorithm';

@Component({
  selector: 'app-add-algorithm-dialog',
  templateUrl: './add-algorithm-dialog.component.html',
  styleUrls: ['./add-algorithm-dialog.component.css'],
})
export class AddAlgorithmDialogComponent implements OnInit {
  private algo = {} as Algorithm;

  constructor(
    @Optional() public dialogRef: MatDialogRef<AddAlgorithmDialogComponent>,
  ) {}

  ngOnInit() {}
}
