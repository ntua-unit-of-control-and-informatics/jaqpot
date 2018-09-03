import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Parameter } from '../../../jaqpot-client';

@Component({
  selector: 'app-parameterlist',
  templateUrl: './parameterlist.component.html',
  styleUrls: ['./parameterlist.component.css']
})
export class ParameterlistComponent implements OnInit {

  @Input() parameters: Array<Parameter>;

  constructor() { }

  ngOnInit() {
    // console.log(this.parameters);
    // this.parameters.forEach(par =>{
    //   console.log(par.name)
    // })
  }


  // ngAfterViewChecked(){
      // this.parameters.forEach(par =>{
      //   console.log("printing from param", par) 
      // })
      // console.log(this.parameters);


  // }

}
