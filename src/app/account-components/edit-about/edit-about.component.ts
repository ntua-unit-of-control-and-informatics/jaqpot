import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization, User } from '@euclia/accounts-client';
import { OrganizationsApiService } from '../../accounts-api/organizations-api.service';
import { UsersApiService } from '../../accounts-api/userapi.service';
import { DialogsService } from '../../dialogs/dialogs.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {

  _user:User
  _org:Organization
  // _accountEntity:AccountEntity
  _save = false
  _isUser:boolean = false
  _isOrg:boolean = false
  _about:string

  constructor(
    private _userService:UsersApiService,
    private _organizationApi:OrganizationsApiService,
    private router:Router,
    private route: ActivatedRoute,
    private _dialogs:DialogsService
  ) { }

  ngOnInit() {
    if(this.router.url.includes("org")){
      this._organizationApi.getWithIdSecured("/" + this.route.snapshot.params['id']).subscribe((o:Organization)=>{
        this._org = o
        if(o.meta){
          this._about = o.meta.about
        }else{
          this._about = ""
        }
      })
    }else{
      let httpParams = new HttpParams().set("min", "").set("max","").set("id", "").set("email", "");
      this._userService.getUser(httpParams).subscribe(user =>{
        this._user = user[0]
        this._about = user[0].meta.about
        this._isUser = true;
      })
    }
  }

  aboutChanged(){
    if(typeof this._about != 'undefined' && this._about.length - 1 < 512){
      this._save = true;
    }else{
      this._save = false;
    }
  }

  cancel(){
    this.router.navigate(['/home'])
  }

  save(){
    if(this._isUser){
      this._user.meta.about = this._about
      this._userService.updateUser(this._user).subscribe(user=>{
        this.router.navigate(['/home'])
      })
    }else{
      this._org.meta.about = this._about
      this._organizationApi.putEntitySecured(this._org).subscribe(org=>{
        this.router.navigate(['/organization/' + this._org._id])
      })
    }

  }

  photoChosen(event){
    var reader = new FileReader()
    reader.readAsDataURL(event[0])
    reader.onload = (_event) => { 
        this._dialogs.onMessage("Photo cannot be updated from here")
      }
  }

}
