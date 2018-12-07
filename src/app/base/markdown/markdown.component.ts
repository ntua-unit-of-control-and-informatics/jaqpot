import { Component, OnInit, OnChanges, Input, ContentChild, ViewChild, EventEmitter, Output } from '@angular/core';
import { MetaInfo } from '../../jaqpot-client';
import { MatFormFieldControl, MatFormField } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.css']
})
export class MarkdownComponent implements OnChanges {

  @Input() viewOrEdit:string;

  @Input() entityMeta:MetaInfo;
  @Output() markdownChanged = new EventEmitter<any>();
  
  null = new FormControl('', []);

  view:boolean = false;
  edit:boolean = false;

  constructor() { 
    
  }

  ngOnChanges() {
    if(this.viewOrEdit === "edit"){
      this.edit = true;
      this.view = false;
    }else{
      this.edit = false;
      this.view = true;
    }

  }

  markChanged(){
    this.markdownChanged.emit(this.entityMeta)
  }

}
