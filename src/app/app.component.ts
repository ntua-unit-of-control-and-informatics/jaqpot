import {  Component } from '@angular/core';
import { DialogsService } from './dialogs/dialogs.service';
import {OnInit, OnDestroy} from '@angular/core';
import { LoginDialogComponent } from './dialogs/login-logout-dialog/login-dialog.component'
import { LogoutDialogComponent } from './dialogs/login-logout-dialog/logout-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from './session/session.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';

import { AuthenticatedResult, OidcClientNotification, OidcSecurityService, OpenIdConfiguration, UserDataResult } from 'angular-auth-oidc-client';

// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  isDarkTheme: boolean;
  loggedIn:boolean;
  subscription:Subscription;
  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;


  configuration$: Observable<OpenIdConfiguration>;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<UserDataResult>;
  isAuthenticated = false;
  checkSessionChanged$: Observable<boolean>;
  checkSessionChanged: any;
  isAuthenticated$: Observable<AuthenticatedResult>;


  constructor(
    public oidcSecurityService: OidcSecurityService,
    public dialog: MatDialog,
    public dialogsService:DialogsService,
    public sessionService: SessionService
    ) { 


      var theme = sessionService.get('theme');
      if(theme === 'dark-theme'){
        this.isDarkTheme = true;
      }else{
        this.isDarkTheme = false;
      }

      this.subscription = this.sessionService
      .getTheme().subscribe(theme => {
        var the = (<any>Object).values(theme);
        if(the[0] === 'default-theme'){
          this.isDarkTheme = false;
        }
        else{
          this.isDarkTheme = true;
        }
      })
    }

  ngOnInit(){



    this.oidcSecurityService.getConfiguration().subscribe(c =>{
      console.log(c)
    })
      this.userData$ = this.oidcSecurityService.userData$;

      this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$
      this.checkSessionChanged$ = this.oidcSecurityService.checkSessionChanged$;

      this.isAuthorizedSubscription = this.oidcSecurityService.isAuthenticated$.subscribe(
        
        (isAuthorized: AuthenticatedResult) => {
          console.log(isAuthorized)
          if(isAuthorized.isAuthenticated === true){
            this.isAuthorized = true
            this.loggedIn = true;
            this.userData$.subscribe(d =>{
              if(d){
                this.sessionService.setUserData(d)

                if(localStorage.getItem('goToModel')){
                  var modelId = localStorage.getItem('goToModel')
                  let model_url = '/model/' + modelId;
                  // this.router.navigate([model_url])
                  window.location.assign(model_url)
                }

              }
            })
          }else{
            this.isAuthorized = false
            this.loggedIn = false;
          }
        });


        this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData, accessToken, idToken, configId }) => {
        });

        this.configuration$ = this.oidcSecurityService.getConfiguration();
        this.userData$ = this.oidcSecurityService.userData$;
        this.checkSessionChanged$ = this.oidcSecurityService.checkSessionChanged$;
    
        this.oidcSecurityService.isAuthenticated$.subscribe(({ isAuthenticated }) => {
          this.isAuthenticated = isAuthenticated;
    
          console.warn('authenticated: ', isAuthenticated);
        });


  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent,{
    });
  }

  openLogoutDialog(){
    let dialogRef = this.dialog.open(LogoutDialogComponent,{
    });
  }
  
  refreshSession() {
    this.oidcSecurityService.forceRefreshSession().subscribe((result) => console.log(result));
  }
  
  changeTheme(): void{
      if (this.isDarkTheme === true) {
        this.sessionService.set('theme', 'default-theme');
    } else {
      this.sessionService.set('theme', 'dark-theme');
    }
  }

  login(): void{
    this.oidcSecurityService.authorize();
  }

  openAccounts():void{
    this.dialogsService.manageAccounts().subscribe(res=>{
      if(res === 'LOGOUT'){
        this.oidcSecurityService.logoff()
      }
    })
  }

}

