import { Component, OnInit } from '@angular/core';
import { Organization } from '../../jaqpot-client/model/organization';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';
import { OrganizationService } from '../../jaqpot-client/api/organization.service';
import { map } from '../../../../node_modules/@types/d3';
import { MatDialog } from '../../../../node_modules/@angular/material';
import { ProfilepicDialogComponent } from '../../dialogs/profilepic-dialog/profilepic-dialog.component';
import { Subject } from '../../../../node_modules/rxjs';
import { DialogsService } from '../../dialogs/dialogs.service';

@Component({
  selector: 'app-organization-base',
  templateUrl: './organization-base.component.html',
  styleUrls: ['./organization-base.component.css']
})
export class OrganizationBaseComponent implements OnInit {

  editFromP:Subject<boolean> = new Subject();

  organization:Organization;
  edit = false;
  canedit = false;
  photo_unavail=true;
  edit_l = false;
  edit_w = false;
  edit_c = false;
  editabout = false;
  confirmationResult:boolean;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private organizationService:OrganizationService,
    private dialogService:DialogsService,
    private router:Router
  ) {   }

  ngOnInit() {
    const id = this.route.snapshot.params.id

    this.organizationService.getWithIdSecured(id).subscribe(orgGot =>{
        this.organization = orgGot
        var userData = JSON.parse(sessionStorage.getItem('userData'))
        if(userData.groups.includes('/Administrator') && this.organization._id === 'Jaqpot'){
          this.edit = true;
          this.canedit = true;
        }
        if(this.organization.meta
           && this.organization.meta.creators
           && this.organization.meta.creators.includes(userData.sub)){
            this.edit = true;
            this.canedit = true;
        }
        if(this.organization.organizationPic == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
      }
    )
  }

  ngAfterViewInit(){
  }


  addOrgPicDialog(){
    let dialogRef = this.dialog.open(ProfilepicDialogComponent,{})
    dialogRef.afterClosed().subscribe(result => {
      this.organization.organizationPic = result;
      this.organizationService.putWithIdSecured(this.organization._id, this.organization)
      .subscribe(orgGot =>{
        this.organization = orgGot;
        if(this.organization.organizationPic == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
      })
    });
  }

  editForm(){
    this.editFromP.next(true)
    this.edit = false;
    this.edit_l = true;
    this.edit_w = true;
    this.edit_c = true;
    this.editabout = true;
  }

  saveForm(){
    this.editFromP.next(false)
    this.edit = true;
    this.editabout = false;
    this.edit_l = false;
    this.edit_w = false;
    this.edit_c = false;
    this.organizationService.putWithIdSecured(this.organization._id, this.organization)
      .subscribe(orgGot =>{
        this.organization = orgGot;
        if(this.organization.organizationPic == null){
          this.photo_unavail = true;
        }else{
          this.photo_unavail = false;
        }
    })
  }

  deleteOrg(){
    this.dialogService.confirmDeletion().subscribe(result => {
      this.confirmationResult = result;
      if(result === true){
        this.organizationService.deleteEntity(this.organization._id)
        .subscribe(resp =>{
          this.router.navigate(["account"])
        })
      }
    });

  }
  
}
