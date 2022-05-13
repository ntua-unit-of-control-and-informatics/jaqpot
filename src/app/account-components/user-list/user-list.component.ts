import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { User } from '@euclia/accounts-client';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges {

  @Input() isAdmin:boolean 
  @Input() users:User[]
  // @Output() usersSelected:User[]
  @Output() adminSelectedAction = new EventEmitter<User>();
  @Output() removeUserAction = new EventEmitter<User>();


  constructor() { }

  ngOnChanges(): void {

  }

  // onAreaListControlChanged(user:User){
  //   console.log(user)
  //   this.userSelected.emit(user._id)
  // }

  selectAdmin(user){
    this.adminSelectedAction.emit(user)
  }

  removeUser(user){
    this.removeUserAction.emit(user)
  }

}
