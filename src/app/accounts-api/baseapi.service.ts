import {
  Injectable
} from '@angular/core';
import {
  OidcSecurityService
} from 'angular-auth-oidc-client';
import {
  HttpBackend,
  HttpParams,
  HttpHeaders,
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  tap,
  catchError,
  map
} from '../../../node_modules/rxjs/operators';
import {
  Meta
} from '../ui-models/meta';
import {
  Config
} from '../config/config';
import {
  User
} from '../ui-models/user';
import { DialogsService } from '../dialogs/dialogs.service';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService < T > {

  private _basePath: string;
  private _defaultHeaders: Headers = new Headers();
  private _path: string;

  _token: string

  constructor(protected http: HttpClient,
    protected dialogsService: DialogsService,
    protected oidcSecurityService: OidcSecurityService,
    protected requestPath: String) {
    this._basePath = Config.AccountsApi
    this._path = this._basePath + this.requestPath
    this.oidcSecurityService.getIdToken().subscribe(t=>{
      this._token = t
    })

  }

  public post < T > (entity: any): Observable < T > {
    // const token = this.oidcSecurityService.getToken();
    const token = this._token
    const tokenValue = 'Bearer ' + token;
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }).set('Authorization', tokenValue);
    let pathFormed = this._path
    return this.http.post(pathFormed, entity,{
      headers: headers}).pipe(tap((res:Response) =>{
        return res
      }),catchError(err =>this.dialogsService.onError(err)))
  }

    public getWithIdSecured<T>(id:string): Observable<T>{
        let params = new HttpParams();
        // const token = this.oidcSecurityService.getToken();
        const token = this._token
        const tokenValue = 'Bearer ' + token;
        let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.get(pathFormed, { headers: headers, params: params } ).pipe(
            tap((res : Response) => { 
                return res           
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

  //   public getList<T>(params:HttpParams){
  //       const token = this.oidcSecurityService.getToken();
  //       const tokenValue = 'Bearer ' + token;
  //       let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
  //       return this.http.get(this._path, {headers: headers, params:params}).pipe(
  //           tap((res:Response) => {
  //               return res.json
  //           }),catchError(err => this.dialogsService.onError(err))
  //       );
  //   }

  //   public getPropertyWithIdSecured<T>(id:string, property:string): Observable<T>{
  //       let params = new HttpParams();
  //       const token = this.oidcSecurityService.getToken();
  //       const tokenValue = 'Bearer ' + token;
  //       let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
  //       let pathFormed = this._path + id + "/" + property
  //       return this.http.get(pathFormed, { headers: headers, params: params } ).pipe(
  //           tap((res : Response) => { 
  //               return res           
  //           }),catchError( err=> this.dialogsService.onError(err) )
  //       );
  //   }

    public putWithIdSecured<T>(id:string, updateIt:any): Observable<T>{
        let params = new HttpParams();
        // const token = this.oidcSecurityService.getToken();
        const token = this._token
        const tokenValue = 'Bearer ' + token;
        let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.put(pathFormed, updateIt, { headers: headers, params: params } ).pipe(
            tap((res : Response) => { 
                return res           
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public putEntitySecured<T>(updateIt:any): Observable<T>{
        let params = new HttpParams();
        // const token = this.oidcSecurityService.getToken();
        const token = this._token
        const tokenValue = 'Bearer ' + token;
        let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
        let pathFormed = this._path
        return this.http.put(pathFormed, updateIt, { headers: headers, params: params } ).pipe(
            tap((res : Response) => { 
                return res           
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

    public putWithParamsEntitySecured<T>(updateIt:any, params:HttpParams): Observable<T>{
      // let params = new HttpParams();
        // const token = this.oidcSecurityService.getToken();
        const token = this._token
      const tokenValue = 'Bearer ' + token;
      let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
      let pathFormed = this._path
      return this.http.put(pathFormed, updateIt, { headers: headers, params: params } ).pipe(
          tap((res : Response) => { 
              return res           
          }),catchError( err => this.dialogsService.onError(err) )
      );
  }

    // public postEntity<T>(entity:any): Observable<T>{
    //     const token = this.oidcSecurityService.getToken();
    //     const tokenValue = 'Bearer ' + token;
    //     let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
    //     let pathFormed = this._path
    //     return this.http.post(pathFormed, entity, { headers: headers} ).pipe(
    //         tap((res : Response) => { 
    //             return res          
    //         }),catchError( err => this.dialogsService.onError(err) )
    //     );
    // }

    public deleteEntityWithID<T>(id:string): Observable<T>{
        // const token = this.oidcSecurityService.getToken();
        const token = this._token
        const tokenValue = 'Bearer ' + token;
        let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
        let pathFormed = this._path + id
        return this.http.delete(pathFormed, { headers: headers} ).pipe(
            tap((res : Response) => { 
                return res          
            }),catchError( err => this.dialogsService.onError(err) )
        );
    }

  //   public deleteEntity<T>(entity): Observable<T>{
  //       const token = this.oidcSecurityService.getToken();
  //       const tokenValue = 'Bearer ' + token;
  //       let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
  //       let pathFormed = this._path
  //       const httpOptions = {
  //           headers: headers,
  //           body: { entity }
  //       };
  //       console.log(httpOptions)
  //       return this.http.delete(pathFormed, httpOptions ).pipe(
  //           tap((res : Response) => { 
  //               return res          
  //           }),catchError( err => this.dialogsService.onError(err) )
  //       );
  //   }

  //   public count<T>(params:HttpParams):Observable<any>{
  //       const token = this.oidcSecurityService.getToken();
  //       const tokenValue = 'Bearer ' + token;
  //       let headers = new HttpHeaders({'Content-Type':'application/json'}).set('Authorization', tokenValue);
  //       return this.http.get(this._path, { headers: headers, params: params, observe:'response' } ).pipe(
  //              tap(resp => { 
  //                   return resp.headers.get('total');            
  //               }),catchError( err => this.dialogsService.onError(err) )

  //       )
  //     }

}
