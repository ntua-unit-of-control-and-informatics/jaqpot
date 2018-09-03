import { Injectable } from "@angular/core";
import { OidcSecurityStorage } from "angular-auth-oidc-client/src/services/oidc.security.storage";
import { SessionService } from "./session.service";
import { AuthorizationResult } from "angular-auth-oidc-client/src/models/authorization-result.enum";

@Injectable()
export class SecurityStorage implements OidcSecurityStorage{


    constructor(private _sessionService:SessionService){}

    public read(key:string): any{
        console.log(key)
        // return this._sessionService.getAccessToken();
    }

    public write(key:string, value:any){
        // console.log(value)
        this._sessionService.setAccessToken(key, value);
    }

}