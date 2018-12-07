import { Injectable } from '@angular/core';
import { Dataset, FeatureInfo } from '../model/models';
import { DatasetBuilderService } from '../builders/dataset-builder.service';
import { SessionService } from '../../session/session.service';
import { FeatureBuilderService } from '../builders/feature-builder.service';
import { MetaBuilderService } from '../builders/meta-builder.service';
import { FeatureInfoBuilderService } from '../builders/feature-info-builder.service';
import { DataEntryBuilderService } from '../builders/data-entry-builder.service';

@Injectable({
  providedIn: 'root'
})
export class DatasetFactoryService {

  constructor(
    public sessionService:SessionService
  ) { }

  createDummyFromCsv(csv:string, id:string){
    let _datasetBuilder = new DatasetBuilderService();
    let _metaBuilder = new MetaBuilderService();
    const rows = csv.split(/\r?\n/)
    rows.forEach(r => {
      let data = r.split(/,|;/)
      if(data.length === 1){
        let remove = rows.indexOf(r)
        rows.splice(remove, 1)
      }
    })
    let ids = rows[0].split(/,|;/);
    let id_index:number;
    if(id != "None"){
      id_index = ids.indexOf(id, 0);
      if (id_index > -1) {
        ids.splice(id_index, 1);
     }
    }
    rows.splice(0,1)
    let userid = this.sessionService.getUserId();
    _metaBuilder.setCreators(userid)
    _metaBuilder.initializeAudiences()
    _metaBuilder.initializeComments()
    _metaBuilder.initializeDescriptions()
    _metaBuilder.initializeTags()
    _metaBuilder.initilizeTitles()
    _metaBuilder.initializeSubjects()
    let meta = _metaBuilder.build()
    _datasetBuilder.setMeta(meta)
    let featureInfos = []
    ids.forEach(id =>{
      let _featureInfoBuilder = new FeatureInfoBuilderService();
      _featureInfoBuilder.setName(id)
      _featureInfoBuilder.setUri('temporary/'+id)
      let featInfo = _featureInfoBuilder.build()
      _datasetBuilder.appendfeatureInfo(featInfo)
      featureInfos.push(featInfo)
    })
    let i = 1
    rows.forEach(r =>{
      // let data_to_enter = r.split(/,|;/)
      let data_to_enter = this.csvToArray(r)
      if(id_index > -1 ){
        let _dataEntryBuilder = new DataEntryBuilderService()
        _dataEntryBuilder.setEntryIdName(data_to_enter[id_index].toString())
        _dataEntryBuilder.setOwnerUUID(this.sessionService.getUserId())
        data_to_enter.splice(id_index, 1)
        let values : { [key: string]: any} = {};
        for(var _i = 0; _i < data_to_enter.length; _i++){
          let featInfo:FeatureInfo = featureInfos[_i]
          if(isNaN( Number(data_to_enter[_i]))){
            values[ featInfo.uri ] = data_to_enter[_i]
          }else{
            values[ featInfo.uri ] = Number(data_to_enter[_i])
          }
        }
        _dataEntryBuilder.setDataEntry(values)
        let _dataEntry = _dataEntryBuilder.build()
        _datasetBuilder.appendDataEntry(_dataEntry)
      }
      else{
        let _dataEntryBuilder = new DataEntryBuilderService()
        _dataEntryBuilder.setEntryIdName(i.toString())
        _dataEntryBuilder.setOwnerUUID(this.sessionService.getUserId())
        let values : { [key: string]: any} = {};
        for(var _i = 0; _i < data_to_enter.length; _i++){
          let featInfo:FeatureInfo = featureInfos[_i]
          if(isNaN( Number(data_to_enter[_i]))){
            values[ featInfo.uri ] = data_to_enter[_i]
          }else{
            values[ featInfo.uri ] = Number(data_to_enter[_i])
          }
        }
        _dataEntryBuilder.setDataEntry(values)
        let _dataEntry = _dataEntryBuilder.build()
        _datasetBuilder.appendDataEntry(_dataEntry)
      }
      i += 1
    })
    
    let dataset = _datasetBuilder.build()
    return dataset
  }

  createDummyFromImageCsv(csv:string, id:string){
    let _datasetBuilder = new DatasetBuilderService();
    let _metaBuilder = new MetaBuilderService();
    const rows = csv.split(/\r?\n/)
    rows.forEach(r => {
      let data = r.split(/,|;/)
      if(data.length === 1){
        let remove = rows.indexOf(r)
        rows.splice(remove, 1)
      }
    })
    let ids = rows[0].split(/,|;/);
    let id_index:number;
    if(id != "None"){
      id_index = ids.indexOf(id, 0);
      if (id_index > -1) {
        ids.splice(id_index, 1);
     }
    }
    rows.splice(0,1)
    let userid = this.sessionService.getUserId();
    _metaBuilder.setCreators(userid)
    _metaBuilder.initializeAudiences()
    _metaBuilder.initializeComments()
    _metaBuilder.initializeDescriptions()
    _metaBuilder.initializeTags()
    _metaBuilder.initilizeTitles()
    _metaBuilder.initializeSubjects()
    let meta = _metaBuilder.build()
    _datasetBuilder.setMeta(meta)
    let featureInfos = []
    ids.forEach(id =>{
      let _featureInfoBuilder = new FeatureInfoBuilderService();
      _featureInfoBuilder.setName(id)
      _featureInfoBuilder.setUri('temporary/'+id)
      let featInfo = _featureInfoBuilder.build()
      _datasetBuilder.appendfeatureInfo(featInfo)
      featureInfos.push(featInfo)
    })
    let i = 1
    rows.forEach(r =>{
      let data_to_enter_temp = r.split(/,|;/)
      let data_to_enter = []
      data_to_enter[0] = data_to_enter_temp[0]
      data_to_enter[1] = data_to_enter_temp[1] + ";" + data_to_enter_temp[2] + "," + data_to_enter_temp[3]
      if(id_index > -1 ){
        let _dataEntryBuilder = new DataEntryBuilderService()
        _dataEntryBuilder.setEntryIdName(data_to_enter[id_index].toString())
        _dataEntryBuilder.setOwnerUUID(this.sessionService.getUserId())
        data_to_enter.splice(id_index, 1)
        let values : { [key: string]: any} = {};
        for(var _i = 0; _i < data_to_enter.length; _i++){
          let featInfo:FeatureInfo = featureInfos[_i]
          if(isNaN( Number(data_to_enter[_i]))){
            values[ featInfo.uri ] = data_to_enter[_i]
          }else{
            values[ featInfo.uri ] = Number(data_to_enter[_i])
          }
        }
        _dataEntryBuilder.setDataEntry(values)
        let _dataEntry = _dataEntryBuilder.build()
        _datasetBuilder.appendDataEntry(_dataEntry)
      }
      else{
        let _dataEntryBuilder = new DataEntryBuilderService()
        _dataEntryBuilder.setEntryIdName(i.toString())
        _dataEntryBuilder.setOwnerUUID(this.sessionService.getUserId())
        let values : { [key: string]: any} = {};
        for(var _i = 0; _i < data_to_enter.length; _i++){
          let featInfo:FeatureInfo = featureInfos[_i]
          values[ featInfo.uri ] = data_to_enter[_i]
        }
        _dataEntryBuilder.setDataEntry(values)
        let _dataEntry = _dataEntryBuilder.build()
        _datasetBuilder.appendDataEntry(_dataEntry)
      }
      i += 1
    })
    
    let dataset = _datasetBuilder.build()
    return dataset
  }


  csvToArray(text:string){
    var re_valid = /^\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*(?:,\s*(?:'[^'\\]*(?:\\[\S\s][^'\\]*)*'|"[^"\\]*(?:\\[\S\s][^"\\]*)*"|[^,'"\s\\]*(?:\s+[^,'"\s\\]+)*)\s*)*$/;
    var re_value = /(?!\s*$)\s*(?:'([^'\\]*(?:\\[\S\s][^'\\]*)*)'|"([^"\\]*(?:\\[\S\s][^"\\]*)*)"|([^,'"\s\\]*(?:\s+[^,'"\s\\]+)*))\s*(?:,|$)/g;
    // Return NULL if input string is not well formed CSV string.
    if (!re_valid.test(text)) return null;
    var a = [];                     // Initialize array to receive values.
    text.replace(re_value, // "Walk" the string using replace with callback.
        function(m0, m1, m2, m3) {
            // Remove backslash from \' in single quoted values.
            if      (m1 !== undefined) a.push(m1.replace(/\\'/g, "'"));
            // Remove backslash from \" in double quoted values.
            else if (m2 !== undefined) a.push(m2.replace(/\\"/g, '"'));
            else if (m3 !== undefined) a.push(m3);
            return ''; // Return empty string.
        });
    // Handle special case of empty last value.
    if (/,\s*$/.test(text)) a.push('');
    return a;
  }

  createEmty(){

  }
}
