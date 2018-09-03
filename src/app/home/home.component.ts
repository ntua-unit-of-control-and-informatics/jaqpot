import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { SessionService } from '../session/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public oidcSecurityService: OidcSecurityService,
    public sessionService:SessionService,
    public router: Router) { 

  }

  ngOnInit() {

  }

  ngOnAfterViewInit(){
    // if (sessionStorage.getItem("_isAuthorized")) {
    //   this.sessionService.set('loggedIn', 'true')
    // }else{
    //   this.sessionService.set('loggedIn', 'false')
    //   this.sessionService.clearUsername()
    //   this.sessionService.clearSubject()
    //   this.sessionService.clear()
    //   this.sessionService.remove('subjectId')
    //   this.router.navigate(['/'])
    // }
  }

}
