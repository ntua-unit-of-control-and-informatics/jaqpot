import { Component, OnInit } from '@angular/core';
import { AlgorithmsListComponent } from '../algorithms-list/algorithms-list.component';
import { Algorithm } from '../../jaqpot-client/model/algorithm';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { AddAlgorithmDialogComponent } from '../../dialogs/add-algorithm-dialog/add-algorithm-dialog.component';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.css']
})
export class AlgorithmsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addAlgoDialog(){
    let dialogRef = this.dialog.open(AddAlgorithmDialogComponent,{
    });
  }

  

}
