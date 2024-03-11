import { Component, OnInit } from '@angular/core';
import { DatasetFactoryService } from '../../jaqpot-client/factories/dataset-factory.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';
import { Dataset, FeatureInfo, DataEntry, Feature } from '../../jaqpot-client';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatasetToViewdataService } from '../../services/dataset-to-viewdata.service';
import { FeatureFactoryService } from '../../jaqpot-client/factories/feature-factory.service';
import { Config } from '../../config/config';

@Component({
  selector: 'app-add-image-dataset-dialog',
  templateUrl: './add-image-dataset-dialog.component.html',
  styleUrls: ['./add-image-dataset-dialog.component.css'],
})
export class AddImageDatasetDialogComponent implements OnInit {
  images: string;
  // images:{ [key: string]: string};
  filenames: string[];
  datasetFactory: DatasetFactoryService;
  datasetApi: DatasetService;
  featureApi: FeatureApiService;
  datasetViewService: DatasetToViewdataService;
  featFactory: FeatureFactoryService;

  dataSource: { [key: string]: any } = {};

  features_to_edit = [];

  displayedColumns: string[] = [];

  imageChangedEvent: any = '';
  croppedImage: any = '';
  loadImageFailed: any = '';
  cropperReady = false;

  content = true;
  dataset_uploaded = false;
  submit = true;

  datasetUploaded: Dataset;

  data_available: boolean = false;
  features_available: boolean = false;
  datasetMetaForm = new FormGroup({
    datasetTitle: new FormControl('', Validators.required),
    datasetDiscription: new FormControl('', Validators.required),
  });

  imagesArr: string[] = [];

  datasetToSee: Dataset;

  constructor() {}

  ngOnInit() {
    this.datasetMetaForm = new FormGroup({
      datasetTitle: new FormControl('', Validators.required),
      datasetDiscription: new FormControl('', Validators.required),
    });
    this.datasetToSee = this.datasetFactory.createDummyFromImageCsv(
      this.images,
      'id',
    );
    this.dataSource = this.datasetViewService.createViewData(
      this.datasetToSee,
      10,
    );
    this.datasetToSee.features.forEach((fi) => {
      this.features_to_edit.push(this.featFactory.featFromFeatInfo(fi));
    });
    for (let key in this.dataSource[0]) {
      this.displayedColumns.push(key);
    }
    this.data_available = true;
    this.features_available = true;
    // this.features_available = true;
    // for(let key in this.images){
    //   this.imagesArr.push(this.images[key])
    // }
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCroppedBase64(image: string) {
    this.datasetToSee.meta.picture = image;
    this.croppedImage = image;
  }

  imageLoaded() {
    this.cropperReady = true;
  }

  imageLoadFailed() {
    console.log('Load failed');
  }

  uplodDataset() {
    let _temp_actual_ids: { [key: string]: any } = {};
    let feat_length = this.features_to_edit.length;
    // console.log(feat_length)
    let i = 0;
    this.content = false;
    this.submit = false;
    this.features_to_edit.forEach((feat) => {
      this.featureApi.postEntity(feat).subscribe((feature: Feature) => {
        _temp_actual_ids[feature.meta.titles[0]] = feature._id;
        i += 1;
        if (i === feat_length) {
          for (let key in _temp_actual_ids) {
            let data_entry: DataEntry[] = this.datasetToSee.dataEntry;
            data_entry.forEach((de) => {
              // let values: { [key: string]: any; } = {}
              for (let de_key in de.values) {
                let key_name = de_key.split('/');
                if (key_name[1] === key) {
                  let data_entry_new_key =
                    Config.JaqpotBase + '/feature/' + _temp_actual_ids[key];
                  de.values[data_entry_new_key] = de.values[de_key];
                  delete de.values[de_key];
                  // values[data_entry_new_key] = de.values[de_key]
                  // console.log(values)
                }
              }
            });
            // console.log(this.dataset_to_check)
          }
          let featurInf: FeatureInfo[] = this.datasetToSee.features;
          featurInf.forEach((fi) => {
            fi.uri =
              Config.JaqpotBase + '/feature/' + _temp_actual_ids[fi.name];
          });
          this.datasetApi
            .uploadNewDataset(this.datasetToSee)
            .subscribe((dataset_posted) => {
              this.datasetUploaded = dataset_posted;
              this.dataset_uploaded = true;
            });
        }
      });
    });
  }
}
