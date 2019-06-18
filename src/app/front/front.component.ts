import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session/session.service';
import { Subscription } from 'rxjs';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  isAuthorizedSubscription: Subscription;


  constructor(
    private sessionService:SessionService,
    private oidcSecurityService: OidcSecurityService,
    private router:Router
  ) { }

  ngOnInit() {
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        if(isAuthorized === true){
          this.router.navigate(['/home']);
        }
      });

  }

}
