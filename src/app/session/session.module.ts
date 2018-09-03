import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionService } from './session.service';
import { AuthGuardService } from './auth-guard.service';
// import { ComponentService } from './component.service';

@NgModule({
  imports: [

  ],
  declarations: [],
  exports: [],
  entryComponents: [],
  providers: [
    AuthGuardService
    // SessionService,
    // ComponentService
  ]

})
export class SessionModule { }