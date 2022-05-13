import { Injectable } from '@angular/core';
import { BaseApiService } from './baseapi.service';
import { User } from '@euclia/accounts-client';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable, throwError } from 'rxjs';
import { Config } from '../config/config';
import { catchError, tap, map } from 'rxjs/operators';
import { DialogsService } from '../dialogs/dialogs.service'; 
@Injectable({
  providedIn: 'root'
})
export class UsersApiService extends BaseApiService<User> {


  constructor(http: HttpClient,
    // public sessionServise:SessionService,
    public dialogsService:DialogsService,
    public oidcSecurityService: OidcSecurityService){
        super(http, dialogsService, oidcSecurityService,  "/users/")
    }


  public getUser(params:HttpParams):Observable<Array<User>>{
    let path = Config.AccountsApi + "/users"
    const token = this.oidcSecurityService.getToken();
    const tokenValue = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', tokenValue);
    return this.http.get<Array<User>>(path, { headers: headers, params: params} ).pipe(
      tap(resp => { 
        return resp           
    }),catchError( err => this.dialogsService.onError(err) ))
  }

  public updateUser(user:User):Observable<User>{
    let path = Config.AccountsApi + "/users"
    const token = this.oidcSecurityService.getToken();
    const tokenValue = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', tokenValue);
    return this.http.put<User>(path, user, { headers: headers} ).pipe(
      tap(resp => { 
        return resp           
    }),catchError( err => this.dialogsService.onError(err) ))
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
        // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
      return throwError(errorMessage);
  }

}
