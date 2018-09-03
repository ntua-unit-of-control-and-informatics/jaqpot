import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-logout-dialog/login-dialog.component';
import { DialogsService } from './dialogs.service';
import { FormsModule, FormControlDirective, FormGroupDirective, ReactiveFormsModule } from '@angular/forms'
import { MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatTooltipModule,
  MatListModule,
  MatToolbar,
  MatToolbarModule,
  MatCard,
  MatCardModule,
  MatOptionModule,
  MatOption,
  MatAutocompleteModule,
} from '@angular/material';
import { FormControl, NgForm, Validators } from '@angular/forms';
import { JaqpotClientModule } from '../jaqpot-client/jaqpot-client.module'
import { UiModelsModule } from '../ui-models/ui-models.module';
import { Credentials } from '../ui-models/credentials';
import { AaService } from '../jaqpot-client/api/aa.service';
import { LogoutDialogComponent } from './login-logout-dialog/logout-dialog.component';
import { AddAlgorithmDialogComponent } from './add-algorithm-dialog/add-algorithm-dialog.component';
import { MaterialModule } from '../app.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { RouterModule } from '@angular/router/src/router_module';
import {  AccountDialogComponent } from './account-dialog/account-dialog.component';
import { ProfilepicDialogComponent } from './profilepic-dialog/profilepic-dialog.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { OrganizationService } from '../jaqpot-client/api/organization.service';
import { InviteDialogComponent } from './invite-dialog/invite-dialog.component';
import { UserService } from '../jaqpot-client/api/user.service';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
// import { RouterModule } from '@angular/router/src/router_module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatOptionModule,
    MatAutocompleteModule,
    JaqpotClientModule,
    UiModelsModule,
    ImageCropperModule
    // RouterModule

  ],
  declarations: [LoginDialogComponent, ErrorDialogComponent, LogoutDialogComponent, AddAlgorithmDialogComponent, AccountDialogComponent, ProfilepicDialogComponent, OrganizationDialogComponent, CreateOrganizationComponent, InviteDialogComponent, NotificationDialogComponent],
  exports: [LoginDialogComponent, ErrorDialogComponent, LogoutDialogComponent, AddAlgorithmDialogComponent,  AccountDialogComponent, ProfilepicDialogComponent, OrganizationDialogComponent,CreateOrganizationComponent, InviteDialogComponent, NotificationDialogComponent],
  entryComponents: [LoginDialogComponent, ErrorDialogComponent, LogoutDialogComponent, AddAlgorithmDialogComponent,  AccountDialogComponent, ProfilepicDialogComponent, OrganizationDialogComponent,CreateOrganizationComponent,InviteDialogComponent, NotificationDialogComponent],
  providers: [
    DialogsService, AaService, OrganizationService
  ]

})
export class DialogsModule { }