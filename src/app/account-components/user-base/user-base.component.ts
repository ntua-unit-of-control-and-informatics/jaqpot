import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { User, Organization } from '@euclia/accounts-client';
import { Router } from '@angular/router';
import { OrganizationsApiService } from '../../accounts-api/organizations-api.service';


@Component({
  selector: 'app-user-base',
  templateUrl: './user-base.component.html',
  styleUrls: ['./user-base.component.css']
})
export class UserBaseComponent implements OnChanges {

  @Input() user: User;
  @Output() saveUser = new EventEmitter<User>();

  orgs:Array<string> = []
  userOrgs:Array<Organization> = []
  _save:boolean = false;

  constructor(
    private router:Router,
    private orgService:OrganizationsApiService
  ) { 
  }

  ngOnChanges() {
    this._save = false;
  }

  changes(){
    this._save = true;
  }

  save(){
    this.saveUser.emit(this.user)
  }

  openedOrgsPanel(){
    if(typeof this.user.organizations != 'undefined'){
      this.user.organizations.forEach(orgId=>{
        if(!this.orgs.includes(orgId)){
          this.orgs.unshift(orgId)
            this.orgService.getWithIdSecured("/" + orgId).subscribe((org:Organization)=>{
              this.userOrgs.push(org)
            })
        }
      })
    }
  }

  onOrgClicked(organ: Organization){
    this.router.navigate(['/organization/' + organ._id])
  }

  createOrg(){
      this.router.navigate(['/create/organization'])
  }

}
