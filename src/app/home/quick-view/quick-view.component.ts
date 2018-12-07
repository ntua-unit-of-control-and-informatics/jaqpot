import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ViewItem } from '../data-model-view/data-model-view.component';
import { User } from '../../jaqpot-client';
import { Organization } from '../../jaqpot-client/model/organization';
import { DialogsService } from '../../dialogs/dialogs.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css']
})
export class QuickViewComponent implements OnChanges {

  @Input() viewItem: ViewItem

  user:User
  org:Organization
  orgs:Organization[] = []

  owner:User

  constructor(
    private dialogsServise:DialogsService,
    private userApi:UserService,
    private orgsApi:OrganizationService
  ) { }

  ngOnChanges() {
    this.orgs = []
    if(typeof this.viewItem != 'undefined'){
      this.userApi.getUserById(this.viewItem.meta.creators[0]).subscribe((user:User)=>{
        this.owner = user
      })
    }
    if(typeof this.viewItem !='undefined' && typeof this.viewItem.meta.read != 'undefined' && this.viewItem.meta.read.length > 0 ){
      this.viewItem.meta.read.forEach(orgId=>{
        this.orgsApi.getWithIdSecured(orgId).subscribe((org:Organization)=>{
          this.orgs.push(org)
        })
      })

    }
  }

  openUser(){
    this.dialogsServise.quickUser(this.userApi, this.owner)
  }

  openOrg(org){
    this.dialogsServise.onOrganizationView(org, this.orgsApi)
  }

}
