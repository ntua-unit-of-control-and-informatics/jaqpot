import { Injectable } from '@angular/core';
import { MetaInfo, User } from '../jaqpot-client';

@Injectable({
  providedIn: 'root'
})
export class RightsService {

  constructor() { }

  canEdit(metaInfo:MetaInfo, user:User){
    let canEdit:boolean = false;
    if(metaInfo.creators.includes(user._id)){
      canEdit = true;
    }
    user.organizations.forEach(org =>{
      if(typeof metaInfo.write != 'undefined' && metaInfo.write.includes(org)){
        canEdit = true;
      }
    })
    return canEdit;
  }

}
