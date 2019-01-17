import { Component, OnInit, Input } from '@angular/core';
import { Organization } from '../../jaqpot-client/model/organization';
import { User, MetaInfo } from '../../jaqpot-client';
import { UserService } from '../../jaqpot-client/api/user.service';
import { OidcDataService } from '../../../../node_modules/angular-auth-oidc-client/src/services/oidc-data.service';
import { OidcSecurityService } from '../../../../node_modules/angular-auth-oidc-client';
import { DialogsService } from '../../dialogs/dialogs.service';
import { NotificationFactoryService } from '../../jaqpot-client/factories/notification-factory.service';
import { NotificationService } from '../../jaqpot-client/api/notification.service';
import { SessionService } from '../../session/session.service';

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
    private sessionService:SessionService,
    public oidcService:OidcSecurityService
  ) { }

  ngOnInit() {

    if(this.organization._id != "Jaqpot")
    {
      var userData = this.sessionService.getUserData()
      
      if(this.organization.meta.creators.includes(userData.sub)){
        this.caninvite = true;
      }

      this.userIds = this.organization.userIds;
      let user:User = <User>{}
      
      this.userIds.forEach(id =>{
        let userFormed:User = <User>{}
        let metaInfo:MetaInfo = <MetaInfo>{}
        userFormed._id = id
        userFormed.meta = metaInfo
        this.userService.getPropertyWithIdSecured(id, "picture")
          .subscribe(userGot =>{
            user = userGot
            if(user.meta != null && user.meta.picture != null){
              userFormed.meta.picture = user.meta.picture
            }
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
        })
        this.users.push(userFormed)
      })
    }

  }

  openInviteDialog(){
    this.dialogsService.inviteToOrganization(this.userService
      , this.notifFactory
      , this.organization
      , this.notificationService);
  }

  openUserDialog(user){
    this.dialogsService.quickUser(this.userService, user)
  }

}
