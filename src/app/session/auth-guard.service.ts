
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticatedResult, OidcSecurityService } from 'angular-auth-oidc-client';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public oidcSecurityService: OidcSecurityService
    ,public router: Router
    ,public sessionService:SessionService) {}
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {

    return this.oidcSecurityService.isAuthenticated$.pipe(
        map((isAuthorized: AuthenticatedResult) => {
            if (isAuthorized.isAuthenticated) {
                return true;
            }
            this.router.navigate(['']);
            return false;
        })
    );
  }

}
