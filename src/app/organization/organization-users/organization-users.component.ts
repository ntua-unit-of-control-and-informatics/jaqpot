import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../../jaqpot-client/model/organization';
import { User } from '../../jaqpot-client';
import { UserService } from '../../jaqpot-client/api/user.service';
import { OidcDataService } from '../../../../node_modules/angular-auth-oidc-client/src/services/oidc-data.service';
import { OidcSecurityService } from '../../../../node_modules/angular-auth-oidc-client';
import { DialogsService } from '../../dialogs/dialogs.service';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';
import { NotificationService } from '../../jaqpot-client/api/notification.service';

@Component({
  selector: 'app-organization-users',
  templateUrl: './organization-users.component.html',
  styleUrls: ['./organization-users.component.css']
})
export class OrganizationUsersComponent implements OnInit {

  @Input() organization: Organization;
  users:Array<User> = new Array();
  userIds:Array<string> = new Array();
  totalUsers:Number;
  caninvite = false;


  constructor(
    public userService:UserService,
    public notifFactory:NotificationFactoryService,
    public notificationService:NotificationService,
    public dialogsService:DialogsService,
    public oidcService:OidcSecurityService
  ) { }

  ngOnInit() {

    if(this.organization._id != "Jaqpot")
    {
      var userData = JSON.parse(sessionStorage.getItem('userData'))
      
      if(this.organization.meta.creators.includes(userData.sub)){
        this.caninvite = true;
      }

      this.userIds = this.organization.userIds;
      console.log(this.userIds)
      let user:User = <User>{}
      
      this.userIds.forEach(id =>{
        let userFormed:User = <User>{}
        userFormed._id = id
        this.userService.getPropertyWithIdSecured(id, "profilepic")
          .subscribe(userGot =>{
            user = userGot
            userFormed.profilePic = user.profilePic
        })
        this.userService.getPropertyWithIdSecured(id, "occupation")
        .subscribe(userGot => {
          user = userGot
          userFormed.occupation = user.occupation
        })
        this.userService.getPropertyWithIdSecured(id, "occupationat")
        .subscribe(userGot => {
          user = userGot
          userFormed.occupationAt = user.occupationAt
        })
        this.userService.getPropertyWithIdSecured(id, "name")
        .subscribe(userGot => {
          user = userGot
          userFormed.name = user.name
          console.log(userFormed)
        })
        this.users.push(userFormed)
        console.log(this.users)
      })
    }

  }

  openInviteDialog(){
    this.dialogsService.inviteToOrganization(this.userService
      , this.notifFactory
      , this.organization
      , this.notificationService);
  }

}
