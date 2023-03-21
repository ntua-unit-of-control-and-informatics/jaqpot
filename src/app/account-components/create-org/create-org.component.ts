import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '@euclia/accounts-client';
import { OrganizationBuilderService } from '../../accounts-api/builders/organization-builder.service';
import { OrganizationsApiService } from '../../accounts-api/organizations-api.service';
import { SessionService } from '../../session/session.service';

@Component({
  selector: 'app-create-org',
  templateUrl: './create-org.component.html',
  styleUrls: ['./create-org.component.css']
})
export class CreateOrgComponent implements OnInit {

  _save:boolean = false;
  _title:string = "";

  constructor(
    private router:Router,
    private _orgBuilder:OrganizationBuilderService,
    private _sessionService:SessionService,
    private _orgService:OrganizationsApiService
  ) { }

  ngOnInit() {

  }

  changes(value){
    if(typeof this._title != 'undefined' && value.length > 2){
      this._save = true;
    }else{
      this._save = false;
    }
  }

  cancel(){
    this.router.navigate(["/account/home"])
  }

  create(){
    let org = this._orgBuilder
        .initMeta()
        .setTitle(this._title)
        .setCreator(this._sessionService.getUserId()).build()
    this._orgService.post(org).subscribe((org:Organization)=>{
      this.router.navigate(["/organization/" + org._id])
    })
  }


}
