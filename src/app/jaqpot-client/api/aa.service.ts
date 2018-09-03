import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, } from 'rxjs';
import 'rxjs/operator/map';
import '../rxjs-operators';
import 'rxjs/add/operator/map';
import { AuthToken } from '../model/authToken';
import { ErrorReport } from '../model/errorReport';
import 'rxjs/add/operator/map';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { BASE_PATH, COLLECTION_FORMATS } from '../variables';
import { error } from 'util';
import { Config } from '../../config/config';
// import { ErrorReport } from '../../ui-models/ErrorReport';
import { SessionService } from '../../session/session.service';

@Injectable()
export class AaService {

    private _basePath : string;
    private _defaultHeaders: Headers = new Headers();

    private _authenticateEndpoint : string;
    private _authorizeEndpoint : string;
    private _logoutEndpoint : string;
    private _validateEndpoint : string;
    private _errorReport: ErrorReport;
    private _authToken : AuthToken;


    constructor(private http: Http,
                private sessionService: SessionService) { 
        this._basePath = Config.JaqpotBase
        this._authenticateEndpoint = this._basePath + "/aa/login";
        this._authorizeEndpoint = this._basePath + "/aa/authorize";
        this._logoutEndpoint = this._basePath + "/aa/logout";
        this._validateEndpoint = this._basePath + "/aa/validate";
    }


    public login(username: string, password: string){
        let body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);

        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
        };

        return this.http.post(this._authenticateEndpoint, body).pipe(
            map((res: Response) => {
                this._authToken = res.json();
                if(res.status === 200){
                    this.sessionService.set('subjectId', this._authToken.authToken);
                    this.sessionService.set('userName', this._authToken.userName);
                    this.sessionService.set('loggedIn', 'true');
                }
                return this._authToken
            }),catchError(err => this.handleError(err) ))
    }


    public vallidate(subjectId:string){

        let headers = new Headers({'Content-Type':'application/json'});
        headers.set('subjectid', subjectId);
        let options = new RequestOptions({headers: headers})

        return this.http.post(this._validateEndpoint, null, options).pipe(
            map(
                (res : Response) => {
                return res.json()
            }),
            catchError(err => this.handleError(err))
        )
    }

    public logout(subjectId:string){
        let headers = new Headers({'Content-Type':'application/json'});
        headers.set('subjectid', subjectId);
        let options = new RequestOptions({headers: headers})
        return this.http.post(this._logoutEndpoint, null, options).pipe(
            map((res : Response) => {
                return res.json()
            }),catchError(err => this.handleError(err)) );
    }

    /**
     * 
     * @param error 
     * 
     * 
     * private hanlde error only aplyies at the login module of the application
     */
    private handleError(error: Response): Promise<any> {
        let err: ErrorReport = { 
            httpStatus: error.json().httpStatus,
            details: error.json().details,
            message: error.json().message
        };
        
        return Promise.reject(this._errorReport || err);
    }


    // /**
    //  *
    //  * Extends object by coping non-existing properties.
    //  * @param objA object to be extended
    //  * @param objB source object
    //  */
    // private extendObj<T1,T2>(objA: T1, objB: T2) {
    //     for(let key in objB){
    //         if(objB.hasOwnProperty(key)){
    //             (objA as any)[key] = (objB as any)[key];
    //         }
    //     }
    //     return <T1&T2>objA;
    // }

    // /**
    //  * @param consumes string[] mime-types
    //  * @return true: consumes contains 'multipart/form-data', false: otherwise
    //  */
    // private canConsumeForm(consumes: string[]): boolean {
    //     const form = 'multipart/form-data';
    //     for (let consume of consumes) {
    //         if (form === consume) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // /**
    //  * Requests authorization from SSO
    //  * Checks whether the client identified by the provided AA token can apply a method to a URI
    //  * @param method HTTP method
    //  * @param uri URI
    //  * @param subjectid Authorization token
    //  */
    // public authorize(method: string, uri: string, subjectid?: string, extraHttpRequestParams?: any): Observable<string> {
    //     return this.authorizeWithHttpInfo(method, uri, subjectid, extraHttpRequestParams)
    //         .map((response: Response) => {
    //             if (response.status === 204) {
    //                 return undefined;
    //             } else {
    //                 return response.json() || {};
    //             }
    //         });
    // }

    // /**
    //  * Creates Security Token
    //  * Uses OpenAM server to get a security token.
    //  * @param username Username
    //  * @param password Password
    //  */
    // public login(username: string, password: string, extraHttpRequestParams?: any): Observable<AuthToken> {
    //     return this.loginWithHttpInfo(username, password, extraHttpRequestParams)
    //         .map((response: Response) => {
    //             if (response.status === 204) {
    //                 return undefined;
    //             } else {
    //                 return response.json() || {};
    //             }
    //         });
    // }

    // /**
    //  * Logs out a user
    //  * Invalidates a security token and logs out the corresponding user
    //  * @param subjectid Authorization token
    //  */
    // public logout(subjectid?: string, extraHttpRequestParams?: any): Observable<string> {
    //     return this.logoutWithHttpInfo(subjectid, extraHttpRequestParams)
    //         .map((response: Response) => {
    //             if (response.status === 204) {
    //                 return undefined;
    //             } else {
    //                 return response.json() || {};
    //             }
    //         });
    // }

    // /**
    //  * Validate authorization token
    //  * Checks whether an authorization token is valid
    //  * @param subjectid Authorization token
    //  */
    // public validate(subjectid?: string, extraHttpRequestParams?: any): Observable<string> {
    //     return this.validateWithHttpInfo(subjectid, extraHttpRequestParams)
    //         .map((response: Response) => {
    //             if (response.status === 204) {
    //                 return undefined;
    //             } else {
    //                 return response.json() || {};
    //             }
    //         });
    // }


    // /**
    //  * Requests authorization from SSO
    //  * Checks whether the client identified by the provided AA token can apply a method to a URI
    //  * @param method HTTP method
    //  * @param uri URI
    //  * @param subjectid Authorization token
    //  */
    // public authorizeWithHttpInfo(method: string, uri: string, subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
    //     const path = this.basePath + '/aa/authorize';

    //     let queryParameters = new URLSearchParams();
    //     let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

    //     // verify required parameter 'method' is not null or undefined
    //     if (method === null || method === undefined) {
    //         throw new Error('Required parameter method was null or undefined when calling authorize.');
    //     }
    //     // verify required parameter 'uri' is not null or undefined
    //     if (uri === null || uri === undefined) {
    //         throw new Error('Required parameter uri was null or undefined when calling authorize.');
    //     }
    //     if (subjectid !== undefined && subjectid !== null) {
    //         headers.set('subjectid', String(subjectid));
    //     }

    //     // to determine the Content-Type header
    //     let consumes: string[] = [
    //         'application/x-www-form-urlencoded'
    //     ];
    //     let canConsumeForm = this.canConsumeForm(consumes);
    //     let useForm = false;
    //     let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
    //       set(param: string, value: any): void;
    //     };

    //     // to determine the Accept header
    //     let produces: string[] = [
    //         'application/json'
    //     ];


    //     if (method !== undefined) {
    //         formParams.set('method', <any>method);
    //     }

    //     if (uri !== undefined) {
    //         formParams.set('uri', <any>uri);
    //     }

    //     let requestOptions: RequestOptionsArgs = new RequestOptions({
    //         method: RequestMethod.Post,
    //         headers: headers,
    //         body: formParams.toString(),
    //         search: queryParameters,
    //         // withCredentials:this.configuration.withCredentials
    //     });
    //     // https://github.com/swagger-api/swagger-codegen/issues/4037
    //     if (extraHttpRequestParams) {
    //         requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
    //     }

    //     return this.http.request(path, requestOptions);
    // }

    // /**
    //  * Creates Security Token
    //  * Uses OpenAM server to get a security token.
    //  * @param username Username
    //  * @param password Password
    //  */
    // public loginWithHttpInfo(username: string, password: string, extraHttpRequestParams?: any): Observable<Response> {
    //     const path = this.basePath + '/aa/login';

    //     let queryParameters = new URLSearchParams();
    //     let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

    //     // verify required parameter 'username' is not null or undefined
    //     if (username === null || username === undefined) {
    //         throw new Error('Required parameter username was null or undefined when calling login.');
    //     }
    //     // verify required parameter 'password' is not null or undefined
    //     if (password === null || password === undefined) {
    //         throw new Error('Required parameter password was null or undefined when calling login.');
    //     }
    //     // to determine the Content-Type header
    //     let consumes: string[] = [
    //         'application/x-www-form-urlencoded',
    //     ];

    //     let canConsumeForm = this.canConsumeForm(consumes);
    //     let useForm = false;
    //     let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
    //       set(param: string, value: any): void;
    //     };

    //     // to determine the Accept header
    //     let produces: string[] = [
    //         'application/json',
    //     ];

    //     headers.set('Content-Type', 'application/x-www-form-urlencoded');

    //     if (username !== undefined) {
    //         formParams.set('username', <any>username);
    //     }

    //     if (password !== undefined) {
    //         formParams.set('password', <any>password);
    //     }


    //     let requestOptions: RequestOptionsArgs = new RequestOptions({
    //         method: RequestMethod.Post,
    //         headers: headers,
    //         body: formParams.toString(),
    //         search: queryParameters,
    //         // withCredentials:this.configuration.withCredentials
    //     });
    //     // https://github.com/swagger-api/swagger-codegen/issues/4037
    //     if (extraHttpRequestParams) {
    //         requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
    //     }

    //     return this.http.request(path, requestOptions);
    // }

    // /**
    //  * Logs out a user
    //  * Invalidates a security token and logs out the corresponding user
    //  * @param subjectid Authorization token
    //  */
    // public logoutWithHttpInfo(subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
    //     const path = this.basePath + '/aa/logout';

    //     let queryParameters = new URLSearchParams();
    //     let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

    //     if (subjectid !== undefined && subjectid !== null) {
    //         headers.set('subjectid', String(subjectid));
    //     }


    //     // to determine the Accept header
    //     let produces: string[] = [
    //         'application/json'
    //     ];


    //     let requestOptions: RequestOptionsArgs = new RequestOptions({
    //         method: RequestMethod.Post,
    //         headers: headers,
    //         search: queryParameters,
    //         // withCredentials:this.configuration.withCredentials
    //     });
    //     // https://github.com/swagger-api/swagger-codegen/issues/4037
    //     if (extraHttpRequestParams) {
    //         requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
    //     }

    //     return this.http.request(path, requestOptions);
    // }

    // /**
    //  * Validate authorization token
    //  * Checks whether an authorization token is valid
    //  * @param subjectid Authorization token
    //  */
    // public validateWithHttpInfo(subjectid?: string, extraHttpRequestParams?: any): Observable<Response> {
    //     const path = this.basePath + '/aa/validate';

    //     let queryParameters = new URLSearchParams();
    //     let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

    //     if (subjectid !== undefined && subjectid !== null) {
    //         headers.set('subjectid', String(subjectid));
    //     }


    //     // to determine the Accept header
    //     let produces: string[] = [
    //         'application/json'
    //     ];


    //     let requestOptions: RequestOptionsArgs = new RequestOptions({
    //         method: RequestMethod.Post,
    //         headers: headers,
    //         search: queryParameters,
    //         // withCredentials:this.configuration.withCredentials
    //     });
    //     // https://github.com/swagger-api/swagger-codegen/issues/4037
    //     if (extraHttpRequestParams) {
    //         requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
    //     }

    //     return this.http.request(path, requestOptions);
    // }

}
