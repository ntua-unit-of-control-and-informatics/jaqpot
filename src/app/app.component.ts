import { Component , Inject} from '@angular/core';
import { DialogsService } from './dialogs/dialogs.service';
import { FormControl, Validators } from '@angular/forms';
import {OnInit, OnDestroy} from '@angular/core';
import { Credentials } from './ui-models/credentials';
import { LoginDialogComponent } from './dialogs/login-logout-dialog/login-dialog.component'
import {LogoutDialogComponent} from './dialogs/login-logout-dialog/logout-dialog.component'
// import { AccountDialogComponent } from './dialogs/account-dialog/account-dialog.component'
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from './session/session.service';
import { Subscription, Observable } from 'rxjs';
import { element } from 'protractor';
import { Router } from '@angular/router';

import { OidcSecurityService, PublicConfiguration, OidcClientNotification } from 'angular-auth-oidc-client';

// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{


  isDarkTheme: boolean;
  loggedIn:boolean;
  subscription:Subscription;
  isAuthorizedSubscription: Subscription;
  isAuthorized: boolean;

  configuration: PublicConfiguration;
  userDataChanged$: Observable<OidcClientNotification<any>>;
  userData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;
  checkSessionChanged$: Observable<boolean>;
  checkSessionChanged: any;

  constructor(
    public oidcSecurityService: OidcSecurityService,
    public dialog: MatDialog,
    public sessionService: SessionService,
    private router: Router) { 


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
    this.isAuthorizedSubscription = this.oidcSecurityService.isAuthenticated$.subscribe(
      (isAuthorized: boolean) => {
        if(isAuthorized === true){
          this.isAuthorized = true
          this.loggedIn = true;
          this.userData$.subscribe(d =>{
            if(d){
              this.sessionService.setUserData(d)
            }
            // console.log(d)
              // this.sessionService.setUserData(d)
            })
        }else{
          this.isAuthorized = false
          this.loggedIn = false;
        }
      });
      this.configuration = this.oidcSecurityService.configuration;
      this.userData$ = this.oidcSecurityService.userData$;
      this.isAuthenticated$ = this.oidcSecurityService.isAuthenticated$;
      this.checkSessionChanged$ = this.oidcSecurityService.checkSessionChanged$;

      this.oidcSecurityService.checkAuth().subscribe((isAuthenticated) => console.log('app authenticated', isAuthenticated));


  }

  ngOnDestroy(): void {
    // this.oidcSecurityService.onModuleSetup.unsubscribe();
  }

  openLoginDialog() {
    let dialogRef = this.dialog.open(LoginDialogComponent,{
    });
  }

  openLogoutDialog(){
    let dialogRef = this.dialog.open(LogoutDialogComponent,{
    });
  }

  // openAccountDialog(){
  //   let dialogRef = this.dialog.open(AccountDialogComponent,{
  //     height: '100%',
  //     width: '100%',
  //     maxHeight:'100%',
  //     maxWidth:'100%',
  //     panelClass: 'account_dialog'
  //   });
  // }
  

  changeTheme(): void{
      if (this.isDarkTheme === true) {
        this.sessionService.set('theme', 'default-theme');
    } else {
      this.sessionService.set('theme', 'dark-theme');
    }
  }

  trySSO(): void{
    this.oidcSecurityService.authorize();
  }

  // private doCallbackLogicIfRequired() {
  //   if (window.location.hash) {
  //     this.oidcSecurityService.authorizedCallback();
  //   }
  // }

}

