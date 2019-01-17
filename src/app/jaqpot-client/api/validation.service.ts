import {throwError as observableThrowError,  Observable } from 'rxjs';
import { Inject, Injectable, Optional } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType } from '@angular/http';
import '../rxjs-operators';
import { map, filter, catchError, mergeMap, tap } from 'rxjs/operators';
import { Dataset } from '../model/dataset';
import { Config } from '../../config/config';
import { SessionService } from '../../session/session.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { BaseClient } from './base.client';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { MetaInfo, Model, Task } from '../model/models';


@Injectable()
export class ValidationApiService extends BaseClient<Task>{

    _privateBasePath:string;
    _validateBase:string = "/validation/"

    constructor(http: HttpClient,
        public sessionServise:SessionService,
        public dialogsService:DialogsService,
        public oidcSecurityService: OidcSecurityService){
            super(http, dialogsService, oidcSecurityService, "/validation/")
        }


    public externalValidation(modelUri:string, datasetUri:string, validationType:string):Observable<Task>{
        const token = this.oidcSecurityService.getToken();
        const tokenValue = 'Bearer ' + token;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded').set('Authorization', tokenValue);
        let pathFormed = Config.JaqpotBase + this._validateBase + "test_set_validation"
        let body = new HttpParams();
        body = body.set('test_dataset_uri', datasetUri);
        body = body.set('model_uri', modelUri);
        body = body.set('validation_type', validationType);
        return this.http.post(pathFormed, body.toString(), { headers:headers }).pipe(
            tap((res : Response) =>{
                return res;
            }),catchError( err => this.dialogsService.onError(err) )
        )
    }

}

// /**
//  * Jaqpot API
//  * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
//  *
//  * OpenAPI spec version: 4.0.3
//  * Contact: hampos@me.com
//  *
//  * NOTE: This class is auto generated by the swagger code generator program.
//  * https://github.com/swagger-api/swagger-codegen.git
//  * Do not edit the class manually.
//  */

// /* tslint:disable:no-unused-variable member-ordering */

// import { Inject, Injectable, Optional }                      from '@angular/core';
// import { Http, Headers, URLSearchParams }                    from '@angular/http';
// import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
// import { Response, ResponseContentType }                     from '@angular/http';

// import { Observable }                                        from 'rxjs/Observable';
// import '../rxjs-operators';

// import { Task } from '../model/task';

// import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
// import { Configuration }                                     from '../configuration';


// @Injectable()
// export class ValidationService {

//     protected basePath = 'http://dev.jaqpot.org:8081/jaqpot/services';
//     public defaultHeaders: Headers = new Headers();
//     public configuration: Configuration = new Configuration();

//     constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
//         if (basePath) {
//             this.basePath = basePath;
//         }
//         if (configuration) {
//             this.configuration = configuration;
// 			this.basePath = basePath || configuration.basePath || this.basePath;
//         }
//     }

//     /**
//      *
//      * Extends object by coping non-existing properties.
//      * @param objA object to be extended
//      * @param objB source object
//      */
//     private extendObj<T1,T2>(objA: T1, objB: T2) {
//         for(let key in objB){
//             if(objB.hasOwnProperty(key)){
//                 (objA as any)[key] = (objB as any)[key];
//             }
//         }
//         return <T1&T2>objA;
//     }

//     /**
//      * @param consumes string[] mime-types
//      * @return true: consumes contains 'multipart/form-data', false: otherwise
//      */
//     private canConsumeForm(consumes: string[]): boolean {
//         const form = 'multipart/form-data';
//         for (let consume of consumes) {
//             if (form === consume) {
//                 return true;
//             }
//         }
//         return false;
//     }

//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param algorithmUri
//      * @param trainingDatasetUri
//      * @param algorithmParams
//      * @param predictionFeature
//      * @param transformations
//      * @param scaling
//      * @param folds
//      * @param stratify
//      * @param seed
//      * @param subjectId
//      */
//     public crossValidateAlgorithm(algorithmUri?: string, trainingDatasetUri?: string, algorithmParams?: string, predictionFeature?: string, transformations?: string, scaling?: string, folds?: number, stratify?: string, seed?: number, subjectId?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.crossValidateAlgorithmWithHttpInfo(algorithmUri, trainingDatasetUri, algorithmParams, predictionFeature, transformations, scaling, folds, stratify, seed, subjectId, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param modelUri
//      * @param testDatasetUri
//      * @param subjectId
//      */
//     public externalValidateAlgorithm(modelUri?: string, testDatasetUri?: string, subjectId?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.externalValidateAlgorithmWithHttpInfo(modelUri, testDatasetUri, subjectId, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }

//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param splitRatio
//      * @param algorithmUri
//      * @param trainingDatasetUri
//      * @param algorithmParams
//      * @param predictionFeature
//      * @param transformations
//      * @param scaling
//      * @param stratify
//      * @param seed
//      * @param subjectId
//      */
//     public splitValidateAlgorithm(splitRatio: number, algorithmUri?: string, trainingDatasetUri?: string, algorithmParams?: string, predictionFeature?: string, transformations?: string, scaling?: string, stratify?: string, seed?: number, subjectId?: string, extraHttpRequestParams?: any): Observable<Task> {
//         return this.splitValidateAlgorithmWithHttpInfo(splitRatio, algorithmUri, trainingDatasetUri, algorithmParams, predictionFeature, transformations, scaling, stratify, seed, subjectId, extraHttpRequestParams)
//             .map((response: Response) => {
//                 if (response.status === 204) {
//                     return undefined;
//                 } else {
//                     return response.json() || {};
//                 }
//             });
//     }


//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param algorithmUri
//      * @param trainingDatasetUri
//      * @param algorithmParams
//      * @param predictionFeature
//      * @param transformations
//      * @param scaling
//      * @param folds
//      * @param stratify
//      * @param seed
//      * @param subjectId
//      */
//     public crossValidateAlgorithmWithHttpInfo(algorithmUri?: string, trainingDatasetUri?: string, algorithmParams?: string, predictionFeature?: string, transformations?: string, scaling?: string, folds?: number, stratify?: string, seed?: number, subjectId?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/validation/training_test_cross';

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         if (subjectId !== undefined && subjectId !== null) {
//             headers.set('subjectId', String(subjectId));
//         }

//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];


//         if (algorithmUri !== undefined) {
//             formParams.set('algorithm_uri', <any>algorithmUri);
//         }

//         if (trainingDatasetUri !== undefined) {
//             formParams.set('training_dataset_uri', <any>trainingDatasetUri);
//         }

//         if (algorithmParams !== undefined) {
//             formParams.set('algorithm_params', <any>algorithmParams);
//         }

//         if (predictionFeature !== undefined) {
//             formParams.set('prediction_feature', <any>predictionFeature);
//         }

//         if (transformations !== undefined) {
//             formParams.set('transformations', <any>transformations);
//         }

//         if (scaling !== undefined) {
//             formParams.set('scaling', <any>scaling);
//         }

//         if (folds !== undefined) {
//             formParams.set('folds', <any>folds);
//         }

//         if (stratify !== undefined) {
//             formParams.set('stratify', <any>stratify);
//         }

//         if (seed !== undefined) {
//             formParams.set('seed', <any>seed);
//         }

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param modelUri
//      * @param testDatasetUri
//      * @param subjectId
//      */
//     public externalValidateAlgorithmWithHttpInfo(modelUri?: string, testDatasetUri?: string, subjectId?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/validation/test_set_validation';

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         if (subjectId !== undefined && subjectId !== null) {
//             headers.set('subjectId', String(subjectId));
//         }

//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];


//         if (modelUri !== undefined) {
//             formParams.set('model_uri', <any>modelUri);
//         }

//         if (testDatasetUri !== undefined) {
//             formParams.set('test_dataset_uri', <any>testDatasetUri);
//         }

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

//     /**
//      * Creates Validation Report
//      * Creates Validation Report
//      * @param splitRatio
//      * @param algorithmUri
//      * @param trainingDatasetUri
//      * @param algorithmParams
//      * @param predictionFeature
//      * @param transformations
//      * @param scaling
//      * @param stratify
//      * @param seed
//      * @param subjectId
//      */
//     public splitValidateAlgorithmWithHttpInfo(splitRatio: number, algorithmUri?: string, trainingDatasetUri?: string, algorithmParams?: string, predictionFeature?: string, transformations?: string, scaling?: string, stratify?: string, seed?: number, subjectId?: string, extraHttpRequestParams?: any): Observable<Response> {
//         const path = this.basePath + '/validation/training_test_split';

//         let queryParameters = new URLSearchParams();
//         let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845

//         // verify required parameter 'splitRatio' is not null or undefined
//         if (splitRatio === null || splitRatio === undefined) {
//             throw new Error('Required parameter splitRatio was null or undefined when calling splitValidateAlgorithm.');
//         }
//         if (subjectId !== undefined && subjectId !== null) {
//             headers.set('subjectId', String(subjectId));
//         }

//         // to determine the Content-Type header
//         let consumes: string[] = [
//             'application/x-www-form-urlencoded'
//         ];
//         let canConsumeForm = this.canConsumeForm(consumes);
//         let useForm = false;
//         let formParams = new (useForm ? FormData : URLSearchParams as any)() as {
//           set(param: string, value: any): void;
//         };

//         // to determine the Accept header
//         let produces: string[] = [
//             'application/json'
//         ];


//         if (algorithmUri !== undefined) {
//             formParams.set('algorithm_uri', <any>algorithmUri);
//         }

//         if (trainingDatasetUri !== undefined) {
//             formParams.set('training_dataset_uri', <any>trainingDatasetUri);
//         }

//         if (algorithmParams !== undefined) {
//             formParams.set('algorithm_params', <any>algorithmParams);
//         }

//         if (predictionFeature !== undefined) {
//             formParams.set('prediction_feature', <any>predictionFeature);
//         }

//         if (transformations !== undefined) {
//             formParams.set('transformations', <any>transformations);
//         }

//         if (scaling !== undefined) {
//             formParams.set('scaling', <any>scaling);
//         }

//         if (splitRatio !== undefined) {
//             formParams.set('split_ratio', <any>splitRatio);
//         }

//         if (stratify !== undefined) {
//             formParams.set('stratify', <any>stratify);
//         }

//         if (seed !== undefined) {
//             formParams.set('seed', <any>seed);
//         }

//         let requestOptions: RequestOptionsArgs = new RequestOptions({
//             method: RequestMethod.Post,
//             headers: headers,
//             body: formParams.toString(),
//             search: queryParameters,
//             withCredentials:this.configuration.withCredentials
//         });
//         // https://github.com/swagger-api/swagger-codegen/issues/4037
//         if (extraHttpRequestParams) {
//             requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
//         }

//         return this.http.request(path, requestOptions);
//     }

// }
