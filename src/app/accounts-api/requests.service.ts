import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DialogsService } from '../dialogs/dialogs.service';
import { BaseApiService } from './baseapi.service';

@Injectable({
  providedIn: 'root'
})
export class RequestsService extends BaseApiService<Request> {

  constructor(http: HttpClient,
    // public sessionServise:SessionService,
    // public dialogsService:DialogsService,
    public oidcSecurityService: OidcSecurityService,
    public dialogsService:DialogsService){
        super(http, dialogsService, oidcSecurityService,  "/request")
    }

}
