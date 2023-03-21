import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap } from "rxjs/operators";
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { Notification } from '../../jaqpot-client/model/notification';
import { DialogsService } from '../../dialogs/dialogs.service';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';
import { Config } from '../../config/config';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Organization, User } from '@euclia/accounts-client';
import { SessionService } from '../../session/session.service';
import { not } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {

  notificationCount:number
  notificationsTemp:Notification[] = new Array()
  notifications:Notification[] = new Array()

  organizationsAll: Array<string> = []
  organizationsFull: Array<Organization> = []

  constructor(
    private notificationService:NotificationService,
    private organizationService:OrganizationService,
    private userService:UserService,
    private dialogsService:DialogsService,
    private datasetService:DatasetService,
    private modelService:ModelApiService,
    private router:Router,
    private sessionService:SessionService
  ) { }


  async ngOnInit() {   

    // this.userService.getUserById(this.sessionService.getUserId()).then((user:User) =>{
    //   this.organizationsAll = user.organizations.slice()
    //   this.organizationsAll.forEach(orgid => {
    //     this.organizationService.getOrgById(orgid).then((org:Organization)=>{
    //       this.organizationsFull.push(org)
    //     })
    //   })
    // })

    await this.getAllOrganizations()

    // if(Config.notif_poll === true){
    //   console.log("Starting pol")
    //   interval(10000).pipe(
    //     startWith(0),
    //     switchMap(() => this.notificationService.getUnreadNotifications())
    //   ).subscribe(notifsGot => {
        
    //     this.notificationsTemp = notifsGot
    //     this.notificationsTemp.forEach( (notif:Notification) =>{
    //       let org_name = this.organizationsFull.find(org_all => org_all._id === notif.organizationShared)
          
    //       notif.organizationShared = org_name.title
    //       this.notifications.push(notif)
    //     })
    //     // this.notifications = notifsGot
        
    //     this.notifications.forEach
    //     this.notificationService.countUnreadNotifications().subscribe(res =>{
    //       this.notificationCount = res.headers.get("total")
    //     })
    //   })
    // }  
  }



  async getAllOrganizations(){
    this.userService.getUserById(this.sessionService.getUserId()).then((user:User) =>{
      if (user.organizations){
        this.organizationsAll = user.organizations.slice()
        this.organizationsAll.forEach(orgid => {
          this.organizationService.getOrgById(orgid).then((org:Organization)=>{
            this.organizationsFull.push(org)
            if(this.organizationsAll.length === this.organizationsFull.length){
              this.startPoll()
            }
          })
        })
      }else{
        this.organizationsAll = []
        this.organizationsFull = []
      }

    })
  }


  startPoll(){
    if(Config.notif_poll === true){
      interval(10000).pipe(
        startWith(0),
        switchMap(() => this.notificationService.getUnreadNotifications())
      ).subscribe(notifsGot => {
        
        this.notificationsTemp = notifsGot
        this.notificationsTemp.forEach( (notif:Notification) =>{
          let org_name = this.organizationsFull.find(org_all => org_all._id === notif.organizationShared)
          
          notif.organizationShared = org_name.title
          notif.organization_id = org_name._id
          let found = this.notifications.find(notification => notification._id === notif._id )
          if(typeof found === 'undefined'){
            this.notifications.push(notif)
          }
        })        
        this.notifications.forEach
        this.notificationService.countUnreadNotifications().subscribe(res =>{
          this.notificationCount = res.headers.get("total")
        })
      })
    }  


  }


  openNotifDialog(notif){
    this.dialogsService.openActualNotifDialog(notif,
       this.organizationService, 
       this.notificationService, 
       this.datasetService,
       this.modelService,
       this.userService,
       'menu');
  }

  viewAll(){
    this.router.navigate(['/notifications'])
  }


  handleErrorIn(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


}
