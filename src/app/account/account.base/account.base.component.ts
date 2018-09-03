import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { AaService } from '../../jaqpot-client/api/aa.service';
import { SessionService } from '../../session/session.service';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ErrorReport } from '../../ui-models/errorReport';
import { UserService } from '../../jaqpot-client/api/user.service';
import { User } from '../../jaqpot-client';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { ProfilepicDialogComponent } from '../../dialogs/profilepic-dialog/profilepic-dialog.component';
import { Observable } from 'rxjs';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { SocialBaseComponent } from '../social.base/social.base.component';
import {  QuotaComponent } from '../quota/quota.component';
import { CreateOrganizationComponent } from '../../dialogs/create-organization/create-organization.component';

@Component({
  selector: 'app-account.base',
  templateUrl: './account.base.component.html',
  styleUrls: ['./account.base.component.css']
})
export class AccountBaseComponent implements OnInit {

  public errorReport: ErrorReport
  public id:string;
  public username:string;

  user:User;

  public familyName:string;
  public firstName:string;
  public email:string;
  public preferedUserName:string;
  public name:string;


  public edit_name_is_disabled:boolean;
  public edit_familyname_is_disabled:boolean;
  public edit_firstyname_is_disabled:boolean;
  public edit_preferedname_is_disabled:boolean;

  public photo_unavail:boolean;

  public edit:boolean=true;

  public urlForm:FormGroup;

  @ViewChild(SocialBaseComponent) userForS;

  constructor(
    public dialog: MatDialog ,
    private aaService:AaService, 
    private sessionService:SessionService,
    private userService:UserService,
    private router:Router,
    public oidcSecurityService: OidcSecurityService,
    public snackBar: MatSnackBar
  ) { 
    this.username = this.sessionService.get('userName');
    var userData = JSON.parse(sessionStorage.getItem('userData'))
    this.name =userData.name
    this.familyName = userData.family_name;
    this.firstName = userData.given_name;
    this.email = userData.email;
    this.preferedUserName = userData.preferred_username;
    this.edit_name_is_disabled = true;
    this.edit_familyname_is_disabled = true;
    this.edit_firstyname_is_disabled = true;
    this.edit_preferedname_is_disabled = true;
    this.id = userData.sub;
    this.urlForm = new FormGroup({
      url: new FormControl({value: '', disabled: true}, Validators.required),
      title: new FormControl(),
      description: new FormControl()
    })
    this.userService.getUserById(this.id)
    .subscribe(userGot =>{
      this.user = userGot;
      if(this.user.profilePic == null){
        this.photo_unavail = true;
      }else{
        this.photo_unavail = false;
      }
    })
  }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
  }

  addProfilePicDialog(){
    let dialogRef = this.dialog.open(ProfilepicDialogComponent,{})
    dialogRef.afterClosed().subscribe(result => {
      this.user.profilePic = result;
      this.userService.updateUserById(this.id, this.user)
      .subscribe(userGot =>{
        this.user = userGot;
        if(this.user.profilePic == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
      })
    });

  }

  editForm(){
    this.edit = false;
    this.urlForm.enable();
  }

  saveForm(){
    this.edit = true;
    this.urlForm.disable();
    this.userService.updateUserById(this.id, this.user)
    .subscribe(userGot =>{
      this.user = userGot;
    })
    
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3200,
    });
  }

  onUpdated(user){
    this.userService.updateUserById(user.id, user)
    .subscribe(userGot =>{
      this.user = userGot;
      if(this.user.profilePic == null){
        this.photo_unavail = true;
      }else{
        this.photo_unavail = false;
      }
    });
  }

  onDialogClose(){
    window.location.reload();
  }

  createOrganization(){
    let dialogRef = this.dialog.open(CreateOrganizationComponent,{})
  }

}
