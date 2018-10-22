import { Component, OnInit } from '@angular/core';
import { UserService } from '../../jaqpot-client/api/user.service';
import { FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { User, MetaInfo } from '../../jaqpot-client';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';
import { Notification } from '../../jaqpot-client/model/notification';
import { OidcSecurityService } from '../../../../node_modules/angular-auth-oidc-client';
import { Organization } from '../../jaqpot-client/model/organization';
import { NotificationService } from '../../jaqpot-client/api/notification.service';

@Component({
  selector: 'app-invite-dialog',
  templateUrl: './invite-dialog.component.html',
  styleUrls: ['./invite-dialog.component.css']
})
export class InviteDialogComponent implements OnInit {

  userService: UserService;
  notifFactory:NotificationFactoryService
  notificationService:NotificationService

  organization:Organization
  notification:Notification

  inviteMessage:string;

  username: string;
  usersTemp: Array<User> = new Array();
  users: Array<User> = new Array();
  user: User

  addBodyB:boolean=false;

  public userInputCtrl: FormControl;

  constructor(
    oidcService:OidcSecurityService,
  ) {

    this.userInputCtrl = new FormControl({ value: '', disabled: false }, Validators.required)
  }

  ngOnInit() {
  }

  inputChanged(username: string) {
    if (username.length > 1) {

      this.userService.searchUserByName(username)
        .subscribe(idsGot => {
          this.users = new Array();
          this.usersTemp = idsGot
          this.usersTemp.forEach(e => {
            let user = <User>{}
            let tempuser = <User>{}
            let mius:MetaInfo = <MetaInfo>{}
            let miustemp:MetaInfo = <MetaInfo>{}
            user.meta = mius
            user.meta = miustemp
            this.userService.getPropertyWithIdSecured(e._id, "name").subscribe(username => {
              tempuser = username
              user.name = tempuser.name
              user._id = tempuser._id
            })
            this.userService.getPropertyWithIdSecured(e._id, "occupation").subscribe(occupation => {
              tempuser = occupation
              user.occupation = tempuser.occupation
            })
            this.userService.getPropertyWithIdSecured(e._id, "occupationat").subscribe(occupatioAt => {
              tempuser = occupatioAt
              user.occupationAt = tempuser.occupationAt
            })
            this.userService.getPropertyWithIdSecured(e._id, "picture").subscribe(profPic => {
              tempuser = profPic
              user.meta.picture = tempuser.meta.picture
            })
            this.users.push(user)
          })
        })
    }
  }

  invite() {
    let userToInv = <User>{}
    userToInv = this.users.find(users => users.name === this.user)
    if(userToInv == null){
      console.log("Canot find user")
    }
    var userData = JSON.parse(sessionStorage.getItem('userData'))
    this.notification = this.notifFactory.invitationNotification(userData.sub, userToInv._id, this.organization._id)
    
    if(this.addBodyB === true && this.inviteMessage != null){
      this.notification.body = this.inviteMessage
    }
    
    console.log(this.notification)
    this.notificationService.postEntity(this.notification)
      .subscribe(notifGot =>{
        this.notification = notifGot
      })
  }

  addBody(){
    this.addBodyB = true;
  }

  cancelBody(){
    this.addBodyB = false;
  }

}
