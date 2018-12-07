import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { Notification } from '../../jaqpot-client/model/notification';
import { DialogsService } from '../../dialogs/dialogs.service';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { UserService } from '../../jaqpot-client/api/user.service';
import { DatasetService } from '../../jaqpot-client/api/dataset.service';
import { ModelApiService } from '../../jaqpot-client/api/model.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {

  notificationCount:number
  notifications:Array<Notification> = new Array()

  constructor(
    private notificationService:NotificationService,
    private organizationService:OrganizationService,
    private userService:UserService,
    private dialogsService:DialogsService,
    private datasetService:DatasetService,
    private modelService:ModelApiService
  ) { }

  ngOnInit() {
    interval(10000).pipe(
      startWith(0),
      switchMap(() => this.notificationService.getUnreadNotifications())
    ).subscribe(notifsGot => {
      this.notifications = notifsGot
      this.notificationCount = this.notifications.length
    })
  }

  openNotifDialog(notif){
    this.dialogsService.openActualNotifDialog(notif,
       this.organizationService, 
       this.notificationService, 
       this.datasetService,
       this.modelService,
       this.userService);
  }

}
