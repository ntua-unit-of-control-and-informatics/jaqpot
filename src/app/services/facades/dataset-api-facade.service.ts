import { Injectable } from '@angular/core';
import { Dataset, Feature } from '../../jaqpot-client/model/models'
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';

@Injectable({
  providedIn: 'root'
})
export class DatasetApiFacadeService {

  // _featureApi:FeatureApiService

  constructor(
    // private _featureApi:FeatureApiService
  ) { }

  public postDatasetFromTemp(tempDataset:Dataset, features:Feature[]){
    let _temp_actual_ids:{ [key: string]: any; } = {};
    features.forEach(feat => {
      console.log(feat)
      // this._featureApi.postEntity(feat).subscribe(
      //   (feature)=>{
      //     console.log(feature)
      //   }
      // )
    })
  }

}
