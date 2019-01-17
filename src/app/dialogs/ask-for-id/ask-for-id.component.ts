import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask-for-id',
  templateUrl: './ask-for-id.component.html',
  styleUrls: ['./ask-for-id.component.css']
})
export class AskForIdComponent implements OnInit {

  selected = ''

  possible_ids:string[] = []
  csv:string;
  ids:string[] = []

  verify:boolean = false;

  constructor() { }

  ngOnInit() {
    // const rows = this.csv.split(/\r?\n/)  
    // let ids = rows[0].split(/,|;/);
    this.possible_ids.push("None");
    this.ids.forEach(id => {
      this.possible_ids.push(id)
    })
  }

  idChanged($event){
    this.verify = true
    // console.log(this.selected)
  }

}
