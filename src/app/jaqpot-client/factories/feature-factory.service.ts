import { Injectable } from '@angular/core';
import { SessionService } from '../../session/session.service';
import { FeatureInfo, Feature, MetaInfo } from '../model/models';

@Injectable({
  providedIn: 'root'
})
export class FeatureFactoryService {

  constructor(
    private _sessionService:SessionService
  ) { }

  public featFromFeatInfo(feature:FeatureInfo){
    let _feature:Feature = <Feature>{}
    let _meta:MetaInfo = <MetaInfo>{}
    _meta.creators = []
    _meta.titles = []
    _meta.descriptions = []
    _meta.comments = []
    _meta.creators.push(this._sessionService.getUserId())
    _meta.titles.push(feature.name)
    _feature.ontologicalClasses = []
    _feature.meta = _meta
    
    return _feature
  }

}
