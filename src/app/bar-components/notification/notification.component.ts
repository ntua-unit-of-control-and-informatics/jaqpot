import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {interval} from "rxjs/internal/observable/interval";
import {startWith, switchMap} from "rxjs/operators";
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { Notification } from '../../jaqpot-client/model/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NotificationComponent implements OnInit {

  notificationCount:number
  notifications:Array<Notification> = new Array()

  constructor(
    private notificationService:NotificationService
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
    console.log(notif)
  }

}
