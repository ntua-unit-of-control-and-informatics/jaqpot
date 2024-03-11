import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Subject } from '../../../../node_modules/rxjs';
import { Organization } from '../../jaqpot-client/model/organization';

@Component({
  selector: 'app-organization-details',
  templateUrl: './organization-details.component.html',
  styleUrls: ['./organization-details.component.css'],
})
export class OrganizationDetailsComponent implements OnChanges {
  // @Input() editFromP:Subject<boolean>;
  @Input() editFromP: boolean;
  @Input() organization: Organization;

  descriptions: Array<string>;
  subjects: Array<string>;
  audiences: Array<string>;
  edit = false;

  constructor() {}

  ngOnChanges() {
    this.descriptions = new Array();
    this.subjects = new Array();
    this.audiences = new Array();
    // this.editFromP.subscribe(value =>{
    //   this.edit = value
    // })
    this.edit = this.editFromP;
    if (this.organization.meta != null) {
      if (this.organization.meta.descriptions != null) {
        this.descriptions = this.organization.meta.descriptions;
      }
    }
    if (this.organization.meta != null) {
      if (this.organization.meta.subjects != null) {
        this.subjects = this.organization.meta.subjects;
      }
    }
    if (this.organization.meta != null) {
      if (this.organization.meta.audiences != null) {
        this.audiences = this.organization.meta.audiences;
      }
    }
  }

  // ngOnDestroy(){
  //   this.editFromP.unsubscribe()
  // }

  addDescription() {
    this.descriptions.push('');
  }

  deleteDescription(description: string) {
    let index: number = this.descriptions.indexOf(description);
    this.descriptions.splice(index, 1);
  }

  addSubject() {
    this.subjects.push('');
  }

  deleteSubject(subject: string) {
    let index: number = this.subjects.indexOf(subject);
    this.subjects.splice(index, 1);
  }

  addAudience() {
    this.audiences.push('');
  }

  deleteAudience(audience: string) {
    let index: number = this.audiences.indexOf(audience);
    this.audiences.splice(index, 1);
  }

  trackByFn(index: any, item: any) {
    return index;
  }
}
