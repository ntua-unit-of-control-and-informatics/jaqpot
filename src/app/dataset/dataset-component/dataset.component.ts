import { Component, OnInit } from '@angular/core';
import { DatasetListComponent } from '../dataset-list/dataset-list.component';
import { Subscription } from 'rxjs';
import { SessionService } from '../../session/session.service';
import { Dataset } from '../../jaqpot-client/model/dataset'; 

@Component({
  selector: 'app-dataset',
  templateUrl: './dataset.component.html',
  styleUrls: ['./dataset.component.css']
})
export class DatasetComponent implements OnInit {


  constructor() { 

  }

  ngOnInit() {
  }

  

}
