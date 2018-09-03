
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public oidcSecurityService: OidcSecurityService
    ,public router: Router
    ,public sessionService:SessionService) {}
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    // console.log(route + '' + state);
    // console.log('AuthorizationGuard, canActivate');

    return this.oidcSecurityService.getIsAuthorized().pipe(
        map((isAuthorized: boolean) => {
            // console.log('AuthorizationGuard, canActivate isAuthorized: ' + isAuthorized);

            if (isAuthorized) {
                this.sessionService.set('loggedIn', 'true')
                return true;
            }

            this.router.navigate(['/unauthorized']);
            return false;
        })
    );
}
}