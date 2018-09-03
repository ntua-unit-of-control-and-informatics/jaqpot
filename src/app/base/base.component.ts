import { Component, OnInit , ViewEncapsulation} from '@angular/core';
import { Subscription } from 'rxjs';
import { Algorithm, Dataset } from '../jaqpot-client';
import { SessionService } from '../session/session.service';


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class BaseComponent implements OnInit {

  active = 'home';

  subscription:Subscription;
  algoForModel:Algorithm;
  datasetForModel:Dataset;
  algoIsNotChosen:boolean = true;
  datasetIsNotChosen:boolean = true;
  notReady:boolean = true;

  constructor(private _sessionService:SessionService) { }

  ngOnInit() {

    this.subscription = this._sessionService
    .getModelingAlgorithm().subscribe( algo => {
      if(algo){
        this.algoIsNotChosen = false;
      }else{
        this.algoIsNotChosen = true;
      }
      this.algoForModel = algo;
    })  
    this.subscription = this._sessionService
    .getModelingDataset().subscribe( dataset =>{ 
      if(dataset){
        this.datasetIsNotChosen = false;
      }else{
        this.datasetIsNotChosen = true;
      }
      this.datasetForModel = dataset;
    })

  }

  changeActive(string){
    this.active = string;
  }

}
