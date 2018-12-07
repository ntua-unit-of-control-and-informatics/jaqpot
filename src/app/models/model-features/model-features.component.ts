import { Component, OnInit, ViewChild, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material';
import { Model, Feature } from '../../jaqpot-client';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';

@Component({
  selector: 'app-model-features',
  templateUrl: './model-features.component.html',
  styleUrls: ['./model-features.component.css']
})
export class ModelFeaturesComponent implements OnChanges {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  @Input() modelToSee:Model;

  @Input() viewOrEdit:string;

  // @Input() saveEmit:string;

  @Output() modelChanged = new EventEmitter<any>();

  @Output() featsChangedArray = new EventEmitter<any>();


  edit:boolean = false;
  dependendFeatures:Feature[] = []
  independentFeatures:Feature[] = []
  featsChanged:Feature[] = []


  constructor(
    private featureApi:FeatureApiService
  ) { }

  ngOnChanges() {
    if(this.viewOrEdit === 'edit'){
      this.edit = true
    }else{
      this.edit = false
    }

  }

  ngAfterViewInit(){
    this.modelToSee.dependentFeatures.forEach(feat => {
      let featId = feat.split("/")[feat.split("/").length - 1]
      this.featureApi.getWithIdSecured(featId).subscribe((featGot:Feature)=>{
        if(typeof featGot.ontologicalClasses == 'undefined'){
          featGot.ontologicalClasses = []
        }
        this.dependendFeatures.push(featGot)
      })
    })
    this.modelToSee.independentFeatures.forEach(feat => {
      let featId = feat.split("/")[feat.split("/").length - 1]
      this.featureApi.getWithIdSecured(featId).subscribe((featGot:Feature)=>{
        if(typeof featGot.ontologicalClasses == 'undefined'){
          featGot.ontologicalClasses = []
        }
        this.independentFeatures.push(featGot)
      })
    })
  }

  featChanged(feat:Feature){
    if(this.featsChanged.includes(feat) === false){
      this.featsChanged.push(feat)
      this.featsChangedArray.next(this.featsChanged)
    }
  }

}
