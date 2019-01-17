import { Component, OnInit } from '@angular/core';
import { UserService } from '../../jaqpot-client/api/user.service';
import { User } from '../../jaqpot-client';

@Component({
  selector: 'app-user-quick',
  templateUrl: './user-quick.component.html',
  styleUrls: ['./user-quick.component.css']
})
export class UserQuickComponent implements OnInit {

  userApi:UserService
  user:User
  userToSee:User

  constructor() { }

  ngOnInit() {
    this.userApi.getUserById(this.user._id).subscribe((user:User)=>{
      this.userToSee = user;
    })
  }

}
