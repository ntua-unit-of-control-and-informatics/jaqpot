import { Component, OnInit, Input } from '@angular/core';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { Model, User, Feature } from '../../jaqpot-client';
import { UserService } from '../../jaqpot-client/api/user.service';
import { SessionService } from '../../session/session.service';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';
import { FeatureAndValue } from '../../ui-models/featureAndValue';
// import { FeatureAndValue } from '../../ui-models/featureAndValue';


@Component({
  selector: 'app-predict-validate',
  templateUrl: './predict-validate.component.html',
  styleUrls: ['./predict-validate.component.css']
})
export class PredictValidateComponent implements OnInit {

  ready:boolean = false;

  value:string
  selected:string = 'Predict'

  @Input() entityId:string;

  indepFeatures:Feature[] = [];
  depFeatures:Feature[] = [];

  featureAndValue:FeatureAndValue
  indepfeatureAndValues:FeatureAndValue[] = [];
  depFeatureAndValues:FeatureAndValue[] = [];

  inputVals:FeatureAndValue[] = [];

  canExecute:boolean = false;
  model:Model;
  userNow:User

  constructor( 
    private _modelApi:ModelApiService,
    private _userApi:UserService,
    private _sessionService:SessionService,
    private _featureApi:FeatureApiService
  ) { }

  ngOnInit(  ) {
    this._modelApi.getWithIdSecured(this.entityId.split("/")[1]).subscribe((model:Model)=>{
      if(typeof model.meta.execute != 'undefined' && model.meta.execute.includes("Jaqpot")){
        this.canExecute = true;
      }

      if(model.meta.creators.includes(this._sessionService.getUserId())){
        this.canExecute = true;
      }
      this._userApi.getUserById(this._sessionService.getUserId()).subscribe((user:User)=>{
        this.userNow = user
        user.organizations.forEach(org=>{
          if(typeof model.meta.execute != 'undefined' && model.meta.execute.includes(org)){
            this.canExecute = true;
          }
        })
      })
      model.dependentFeatures.forEach(feat =>{
        this._featureApi.getWithIdSecured(feat.split("/")[feat.split("/").length - 1]).subscribe((feat:Feature)=>{
          let featureAndValue:FeatureAndValue = <FeatureAndValue>{};
          featureAndValue.feature = feat
          this.depFeatureAndValues.push(featureAndValue)
        })
      })
      model.independentFeatures.forEach(feat =>{
        this._featureApi.getWithIdSecured(feat.split("/")[feat.split("/").length - 1]).subscribe((feat:Feature)=>{
          let featureAndValue:FeatureAndValue = <FeatureAndValue>{};
          featureAndValue.feature = feat
          this.indepfeatureAndValues.push(featureAndValue)
        })
      })
    })

  }

  methodSelected(event){
    
  }

  inputChanged(feat:FeatureAndValue){
    if(!this.inputVals.includes(feat) && feat.value.length > 0){
      this.inputVals.push(feat)
    }
    if(this.inputVals.length === this.indepfeatureAndValues.length){
      this.ready = true;
    }
  }

  downloadTemplate(){
    var csvData:string = "";
    if(this.selected === 'Predict'){
      let i = 0;
      this.indepFeatures.forEach((feat:Feature)=>{
        if(i != 0){
          csvData = csvData.concat("," + feat.meta.titles[0].toString())
        }
        else{
          csvData = csvData.concat(feat.meta.titles[0].toString())
        }
       i += 1;
      })
    }
    var blob = new Blob([csvData], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    if(navigator.msSaveOrOpenBlob) {
      navigator.msSaveBlob(blob, "dataset.csv");
    } else {
      var a = document.createElement("a");
      a.href = url;
      a.download = 'dataset.csv';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }
 
  
  startInputPrediction(){
    console.log(this.indepfeatureAndValues)

  }


}



