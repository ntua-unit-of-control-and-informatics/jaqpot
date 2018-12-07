import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Dataset, Model, MetaInfo } from '../../jaqpot-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-model-view',
  templateUrl: './data-model-view.component.html',
  styleUrls: ['./data-model-view.component.css']
})
export class DataModelViewComponent implements OnChanges {

  @Input() datasets_to_view: Dataset[];
  @Input() models_to_view: Model[];
  @Input() view_type:string;


  @Output() itemClicked = new EventEmitter<ViewItem>();
  grid_view:boolean = true

  view_items:ViewItem[] = []

  constructor(
    private router:Router
  ) { }

  ngOnChanges() {
    this.view_items = []
    if(this.view_type === "grid")
    {
      this.grid_view = true
    }else
    {
      this.grid_view = false
    }
    this.datasets_to_view.forEach(dataset=>{
      let _view_item:ViewItem = {}
      _view_item.type = "Dataset";
      _view_item.color = "lightblue";
      _view_item.meta = dataset.meta
      _view_item._id = dataset._id
      _view_item.cols = 1
      _view_item.rows = 1
      this.view_items.push(_view_item)
    })
    this.models_to_view.forEach(model=>{
      let _view_item:ViewItem = {}
      _view_item.type = "Model";
      _view_item.color = "lightred";
      _view_item.meta = model.meta
      _view_item._id = model._id
      _view_item.cols = 1
      _view_item.rows = 1
      this.view_items.push(_view_item)
    })
    // console.log(this.view_items)
  }
  
  goToView(item:ViewItem){
    switch(item.type){
      case("Dataset"):{
        let route = '/dataset/' + item._id 
        this.router.navigate([route]);
        break;
      }
      case("Model"):{
        let route = '/model/' +item._id
        this.router.navigate([route]);
        break;
      }
    }
  }

  clicked(item:ViewItem){
    this.itemClicked.emit(item);
  }

}

export interface ViewItem{
  type?: string;
  color?: string;
  meta?: MetaInfo;
  _id?:string;
  cols?:number;
  rows?:number;
}
