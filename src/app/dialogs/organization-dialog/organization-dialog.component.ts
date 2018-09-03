import { Component, OnInit } from '@angular/core';
import { Organization } from '../../jaqpot-client/model/organization';
import { MatDialogRef } from '../../../../node_modules/@angular/material';
import { OidcSecurityService } from '../../../../node_modules/angular-auth-oidc-client';
import { Router } from '../../../../node_modules/@angular/router';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';


@Component({
  selector: 'app-organization-dialog',
  templateUrl: './organization-dialog.component.html',
  styleUrls: ['./organization-dialog.component.css']
})
export class OrganizationDialogComponent implements OnInit {

  organization:Organization;
  organizationService:OrganizationService;
  edit = false;

  constructor(
    public dialogRef: MatDialogRef<OrganizationDialogComponent>,
    public oidcService:OidcSecurityService,
    public router:Router,
    // public organizationService:OrganizationService
    ) {
    
  }

  ngOnInit() {

  }

  ngAfterViewInit(){
    var userData = JSON.parse(sessionStorage.getItem('userData'))
    
    if(userData.groups.includes('/Administrator') && this.organization._id === 'Jaqpot'){
      setTimeout(_ =>this.edit = true);
    }
    if(this.organization.meta
       && this.organization.meta.creators
       && this.organization.meta.creators.includes(userData.sub)){
        setTimeout(_ =>this.edit = true);
    }
  }

  goToOrganization(){
    var route = "/organization/" + this.organization._id
    this.dialogRef.close()
    this.router.navigate([route])
  }

  deleteOrganization(){
    this.organizationService.deleteEntity(this.organization._id).subscribe(resp =>{
        this.dialogRef.close()
      }
    )
  }

}
