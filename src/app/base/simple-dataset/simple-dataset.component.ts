import { Component, OnInit, Input } from '@angular/core';
import { Dataset, FeatureInfo } from '../../jaqpot-client';
import { DatasetToViewdataService } from '../../services/dataset-to-viewdata.service';

@Component({
  selector: 'app-simple-dataset',
  templateUrl: './simple-dataset.component.html',
  styleUrls: ['./simple-dataset.component.css']
})
export class SimpleDatasetComponent implements OnInit {

  @Input() datasetToSee:Dataset

  displayedColumns:string[] = [];
  dataSource:{ [key: string]: any; } = {};
  data_available:boolean = false;

  constructor(
    private _seeDataset:DatasetToViewdataService
  ) { }

  ngOnInit() {
    this.displayedColumns.push("Id")
    this.datasetToSee.features.forEach((feInf:FeatureInfo) =>{
      this.displayedColumns.push(feInf.name)
    })
    this.dataSource = this._seeDataset.createViewData(this.datasetToSee, 1);
    this.data_available = true;
  }

}
