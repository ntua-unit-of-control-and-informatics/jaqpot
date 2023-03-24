import { Injectable } from '@angular/core';
import { BaseApiService } from './baseapi.service';
import { Invitation } from '../ui-models/invitation';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { DialogsService } from '../dialogs/dialogs.service'; 
import { Observable } from 'rxjs';
import { Config } from '../config/config';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InvitationsService extends BaseApiService<Invitation> {

  constructor(http: HttpClient,
    // public sessionServise:SessionService,
    // public dialogsService:DialogsService,
    public oidcSecurityService: OidcSecurityService,
    public dialogsService:DialogsService){
        super(http, dialogsService, oidcSecurityService,  "/invitation")
    }

    public getInvitations(params:HttpParams):Observable<Array<Invitation>>{
      let path = Config.AccountsApi + "/invitation"
      // const token = this.oidcSecurityService.getToken();
      const token = this._token
      const tokenValue = 'Bearer ' + token;
      let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', tokenValue);
      return this.http.get<Array<Invitation>>(path, { headers: headers, params: params} ).pipe(
        tap(resp => { 
          return resp           
      }),catchError( err => this.dialogsService.onError(err) ))
    }

    public countInvitations(params:HttpParams):Observable<any>{
      let path = Config.AccountsApi + "/invitation"    
      // const token = this.oidcSecurityService.getToken();
      const token = this._token
      const tokenValue = 'Bearer ' + token;
      let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', tokenValue);
        return this.http.get(path, { headers: headers, params: params, observe:'response' } ).pipe(
               tap(resp => { 
                    return resp.headers.get('total');            
                }),catchError( err => this.dialogsService.onError(err) ))
    }

}
