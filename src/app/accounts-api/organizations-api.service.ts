import { Injectable } from '@angular/core';
import { Organization } from '@euclia/accounts-client';
import { BaseApiService } from './baseapi.service';
import { HttpClient } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DialogsService } from '../dialogs/dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationsApiService extends BaseApiService<Organization> {

  constructor(http: HttpClient,
    // public sessionServise:SessionService,
    // public dialogsService:DialogsService,
    public oidcSecurityService: OidcSecurityService,
    public dialogsService:DialogsService){
        super(http, dialogsService, oidcSecurityService,  "/organizations")
    }
}
