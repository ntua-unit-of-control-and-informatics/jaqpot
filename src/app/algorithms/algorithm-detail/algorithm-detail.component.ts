import { Component, OnInit, Input } from '@angular/core';
import { Algorithm } from '../../jaqpot-client/model/algorithm';
import { Subscription } from 'rxjs';
import { SessionService } from '../../session/session.service';


@Component({
  selector: 'app-algorithm-detail',
  templateUrl: './algorithm-detail.component.html',
  styleUrls: ['./algorithm-detail.component.css']
})
export class AlgorithmDetailComponent implements OnInit {

  panelOpenState: boolean = false;
  @Input() algorithm: Algorithm;
  subscription:Subscription;
  algoForModel:Algorithm;
  checkAlgoModel: boolean = false;


  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    // this.subscription = this.sessionService.getAlgorithm()
    //   .subscribe(algo =>{ 
    //     this.algorithm = algo;
    //     if(this.algoForModel != undefined && algo != undefined){
    //       if(algo._id === this.algoForModel._id){
    //         this.checkAlgoModel = true;
    //       }else{
    //         this.checkAlgoModel = false;
    //       }
    //     }
       
    //   });
    // this.subscription = this.sessionService.getModelingAlgorithm()
    //   .subscribe(algoM => {
    //     // console.log(algoM);
    //     this.algoForModel = algoM

    //       if(algoM === this.algorithm && algoM != undefined){
    //         this.checkAlgoModel = true;
    //       }else{
    //         this.checkAlgoModel = false;
    //       }

    //   });
  }

  clearCard(){
    // this.sessionService.clearAlgorithm();
  }

  useForModeling(){
    // this.sessionService.setModelingAlgorithm(this.algorithm);
  }

  clearFromModeling(){
    // this.sessionService.clearModelingAlgorithm();
  }

}
