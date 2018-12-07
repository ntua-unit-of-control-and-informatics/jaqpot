import { Component , Inject} from '@angular/core';
import { DialogsService } from './dialogs/dialogs.service';
import { FormControl, Validators } from '@angular/forms';
import {OnInit, OnDestroy} from '@angular/core';
import { Credentials } from './ui-models/credentials';
import { LoginDialogComponent } from './dialogs/login-logout-dialog/login-dialog.component'
import {LogoutDialogComponent} from './dialogs/login-logout-dialog/logout-dialog.component'
// import { AccountDialogComponent } from './dialogs/account-dialog/account-dialog.component'
import { MatDialog } from '@angular/material';
import { SessionService } from './session/session.service';
import { Subscription } from 'rxjs';
import { element } from 'protractor';
import { Router } from '@angular/router';

import { OidcSecurityService } from 'angular-auth-oidc-client';

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

      if (this.oidcSecurityService.moduleSetup) {
      this.doCallbackLogicIfRequired();
    } else {
      this.oidcSecurityService.onModuleSetup.subscribe(() => {
        this.doCallbackLogicIfRequired();
      });
    }

    }

  ngOnInit(){
    this.isAuthorizedSubscription = this.oidcSecurityService.getIsAuthorized().subscribe(
      (isAuthorized: boolean) => {
        if(isAuthorized === true){
          this.loggedIn = true;
        }else{
          this.loggedIn = false;
        }
      });
  }

  ngAfterViewInit(){
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

  private doCallbackLogicIfRequired() {
    if (window.location.hash) {
      this.oidcSecurityService.authorizedCallback();
    }
  }

}

