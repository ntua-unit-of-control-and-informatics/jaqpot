import { Component, OnInit, Input } from '@angular/core';
import { Parameter } from '../../../jaqpot-client';

@Component({
  selector: 'app-parametersteps',
  templateUrl: './parametersteps.component.html',
  styleUrls: ['./parametersteps.component.css']
})
export class ParameterstepsComponent implements OnInit {

  @Input() parameters: Array<Parameter>;

  constructor() { }

  ngOnInit() {
  }

}
