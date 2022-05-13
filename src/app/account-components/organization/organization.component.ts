import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from '@euclia/accounts-client';
import { OrganizationsApiService } from '../../accounts-api/organizations-api.service';
import { DialogsService } from '../../dialogs/dialogs.service';
import { SessionService } from '../../session/session.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  _orgId:string;
  _org:Organization
  _canEdit:boolean = false

  isAdmin:boolean = false

  constructor(
    private route: ActivatedRoute,
    private _orgService:OrganizationsApiService,
    private _sessionService:SessionService,
    private _dialogS:DialogsService,
    private router:Router
  ) { }

  ngOnInit() {
    this._orgId = this.route.snapshot.params.id
    this._orgService.getWithIdSecured("/" + this._orgId).subscribe((org:Organization) =>{
      this._org = org
      let userId = this._sessionService.getUserId()
      if(org.admins){
        if(org.admins.includes(userId)){
          this._canEdit = true
          this.isAdmin = true
        }
      }
    })
  }

  photoChosen(event){
    if(this._canEdit === true){
        var reader = new FileReader()
        reader.readAsDataURL(event[0])
        reader.onload = (_event) => { 
          this._org.meta.picture = reader.result.toString();
          this._orgService.putEntitySecured(this._org).subscribe(orgG=>{
            this._org = orgG
          })
        }
      }else{
        this._dialogS.onMessage("Your account cannot update the organizations photo.")
      }
    }

    editAbout(){
      this.router.navigate(['/edit/org/' + this._orgId]);
    }
  
    saveOrg(event){
      this._orgService.putEntitySecured(event).subscribe(o =>{
        this._org = o
      })
    }

    deleteOrg(){
      this._dialogS.onConfirm("This organization will be deleted!").subscribe(ans =>{
        if(ans === "YES"){
          this._orgService.deleteEntityWithID("/" + this._org._id).subscribe(res=>{
            if(res){
              this.router.navigate(['/home']);
            }
          })
        }
      })
    }
}
