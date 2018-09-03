import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';
import { Observable , of} from 'rxjs';
import '../rxjs-operators';

import { Algorithm } from '../model/algorithm';
import { ErrorReport } from '../model/errorReport';
import { Task } from '../model/task';

// import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { Config } from '../../config/config';
import { SessionService } from '../../session/session.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { HttpClient } from '@angular/common/http/src/client';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { User } from '../model/user';
import { HttpHeaders } from '@angular/common/http';
import { BaseClient } from './base.client';
import { Organization } from '../model/organization';
import { Notification } from '../model/notification';


@Injectable()
export class NotificationService extends BaseClient<Notification>{
    
    _privateBasePath:string;
    private orgnanization:Organization;
    _notificationBase:string = "/notification/"

    constructor(http: Http,
        public sessionServise:SessionService,
        public dialogsService:DialogsService,
        public oidcSecurityService: OidcSecurityService){
            super(http, dialogsService, oidcSecurityService, "/notification/")
            this._privateBasePath = Config.JaqpotBase + this._notificationBase
        }

    public getUnreadNotifications():Observable<Array<Notification>>{
        let params = new URLSearchParams();
            
        let headers = new Headers({'Content-Type':'application/json'});
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        headers.set('Authorization', tokenValue);
        params.set("query", "UNREAD");
        let pathFormed = this._privateBasePath
        return this.http.get(pathFormed, { headers: headers, search: params } ).pipe(
            map((res : Response) => { 
                return res.json()            
            }),catchError( err => this.dialogsService.onError(err) )
        );


    }

}