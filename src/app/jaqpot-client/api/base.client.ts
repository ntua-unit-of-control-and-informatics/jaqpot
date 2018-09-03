import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import '../rxjs-operators';

import { AuthToken } from '../model/authToken';
import { ErrorReport } from '../model/errorReport';

import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { error } from 'util';
import { Config } from '../../config/config';
// import { ErrorReport } from '../../ui-models/ErrorReport';
import { SessionService } from '../../session/session.service';
import { OidcSecurityService } from '../../../../node_modules/angular-auth-oidc-client';
import { map, catchError } from '../../../../node_modules/rxjs/operators';
import { DialogsService } from '../../dialogs/dialogs.service';
import { Model } from '../model/model';

@Injectable()
export abstract class BaseClient <T extends Model>{

    private _basePath : string;
    private _defaultHeaders: Headers = new Headers();
    private _path: string;

    constructor(protected http: Http,
        protected dialogsService: DialogsService,
        protected oidcSecurityService: OidcSecurityService,
        protected requestPath:string) { 
        this._basePath = Config.JaqpotBase
        this._path = this._basePath + this.requestPath
    }

    public getWithIdSecured<T>(id:string): Observable<T>{
        let params = new URLSearchParams();
            
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.get(pathFormed, { headers: headers, search: params } ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public getPropertyWithIdSecured<T>(id:string, property:string): Observable<T>{
        let params = new URLSearchParams();
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        let pathFormed = this._path + id + "/" + property
        return this.http.get(pathFormed, { headers: headers, search: params } ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public putWithIdSecured<T>(id:string, updateIt:any): Observable<T>{
        let params = new URLSearchParams();
            
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.put(pathFormed, updateIt, { headers: headers, search: params } ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public postEntity<T>(entity:any): Observable<T>{
            
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        let pathFormed = this._path
        return this.http.post(pathFormed, entity, { headers: headers} ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public deleteEntity<T>(id:string): Observable<T>{
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.delete(pathFormed, { headers: headers} ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

}