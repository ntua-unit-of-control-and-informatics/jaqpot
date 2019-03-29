import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { SearchViewItem } from '../../ui-models/searchViewItem';
import { type } from 'os';
import { Model, Dataset, User, Feature } from '../../jaqpot-client';
import { Organization } from '../../jaqpot-client/model/organization';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { FeatureApiService } from '../../jaqpot-client/api/feature.service';

@Component({
  selector: 'app-search-quick-view',
  templateUrl: './search-quick-view.component.html',
  styleUrls: ['./search-quick-view.component.css']
})
export class SearchQuickViewComponent implements OnChanges {

  @Input() searchViewItem: SearchViewItem

  modelView:Model
  datasetView:Dataset
  organizationView:Organization

  creator:User
  predicts:Feature[] = []

  constructor(
    private modelApi:ModelApiService,
    public datasetApi:DatasetService,
    public organizationApi:OrganizationService,
    private userApi:UserService,
    private dialogService:DialogsService,
    private featureApi:FeatureApiService
  ) { }

  ngOnChanges() {
    this.creator = <User>{};
    this.predicts = [];
    if(this.searchViewItem != null || this.searchViewItem != null && typeof this.searchViewItem != 'undefined'){
      if(this.searchViewItem.type === 'model')
      {
        this.modelApi.getWithIdSecured(this.searchViewItem._id).subscribe(model =>{
          this.modelView = model
          this.userApi.getWithIdSecured(this.modelView.meta.creators[0]).subscribe(resp =>{
            this.creator = resp
          })
          this.modelView.dependentFeatures.forEach(depf =>{
            let depfar = depf.split("/");
            this.featureApi.getWithIdSecured(depfar[depfar.length -1]).subscribe(f =>{
              this.predicts.push(f);
            })
          })
          

        })

      }
      if(this.searchViewItem.type === 'dataset')
      {
        this.datasetApi.getWithIdSecured(this.searchViewItem._id).subscribe(resp =>{
          this.datasetView = resp
        })
      }
      if(this.searchViewItem.type === 'organization')
      {
        this.organizationApi.getWithIdSecured(this.searchViewItem._id).subscribe(resp =>{
          this.organizationView = resp
        })
      }


    }
  }


  openUser(){
    this.dialogService.quickUser(this.userApi, this.creator)
  }

}
