import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs/internal/Observable';
import { tap, catchError } from 'rxjs/operators';
import { Config } from '../config/config';
import { DialogsService } from '../dialogs/dialogs.service';
import { SessionService } from '../session/session.service';
import { Pocket } from './models/pocket';

@Injectable({
  providedIn: 'root'
})
export class PocketService {

  _basePath:string
  _createPocket:string

  constructor(private http: HttpClient,
    private sessionServise:SessionService,
    private dialogsService:DialogsService,
    public oidcSecurityService: OidcSecurityService){
    this._basePath = Config.jdockApi;
    
    this._createPocket = "/pocket";

  }


  public createPocket(pocket:Pocket): Observable<Pocket>{

    const token = this.oidcSecurityService.getToken();
    const tokenValue = 'Bearer ' + token;
    let headers = new HttpHeaders().set('Content-Type','application/json').set('Authorization', tokenValue);
    let pathFormed = this._basePath + this._createPocket
    return this.http.post(pathFormed, pocket, {headers:headers} ).pipe(
        tap((res : Response) => { 
            return res      
        }),catchError( err => this.dialogsService.onError(err) )
    )

  }

  
}
