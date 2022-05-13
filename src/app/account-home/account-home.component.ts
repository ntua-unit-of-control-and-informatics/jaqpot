import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../accounts-api/userapi.service';
import { HttpParams } from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { User } from '@euclia/accounts-client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrls: ['./account-home.component.css']
})
export class AccountHomeComponent implements OnInit {

  _user:User
  edit_b:boolean = true;
  showEdits:boolean = false;
  edit:boolean = false;

  constructor(
    private _userService:UsersApiService,
    private _oSS:OidcSecurityService,
    private router:Router
  ) { }

  ngOnInit() {
    let httpParams = new HttpParams().set("min", "").set("max","").set("email", "").set("id", "");
    this._userService.getUser(httpParams).subscribe(user =>{
      this._user = user[0]
      // console.log(user[0])
    })
  }

  photoChosen(event){
    var reader = new FileReader()
    reader.readAsDataURL(event[0])
    reader.onload = (_event) => { 
      this._user.meta.picture = reader.result.toString();
      this._userService.updateUser(this._user).subscribe(userG=>{
        this._user = userG
      })
    }
  }


  saveUser(event){
    this._userService.updateUser(event).subscribe(u => {
      this._user = u
    })
  }

  editAbout(){
    this.router.navigate(['/edit/about']);
  }

}
