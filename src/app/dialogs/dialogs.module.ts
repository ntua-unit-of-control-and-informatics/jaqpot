import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
  MatSelectModule,
  MatTableModule,
  MatSpinner,
  MatProgressSpinnerModule,
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
import { NotificationDialogComponent } from './notification-dialogs/notification-dialog/notification-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InvitationNotifDialogComponent } from './notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component';
import { AddDatasetDialogComponent } from './add-dataset-dialog/add-dataset-dialog.component';
import { DatasetDetailComponent } from '../dataset/dataset-detail/dataset-detail.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { UserQuickComponent } from './user-quick/user-quick.component';
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
    MatSelectModule,
    MatAutocompleteModule,
    JaqpotClientModule,
    UiModelsModule,
    ImageCropperModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,MatProgressSpinnerModule
    // DatasetDetailComponent
    // RouterModule

  ],
  declarations: [LoginDialogComponent,
    ErrorDialogComponent,
    LogoutDialogComponent,
    AddAlgorithmDialogComponent,
    AccountDialogComponent,
    ProfilepicDialogComponent,
    OrganizationDialogComponent,
    CreateOrganizationComponent, 
    InviteDialogComponent, 
    NotificationDialogComponent, 
    ConfirmationDialogComponent, 
    InvitationNotifDialogComponent, 
    AddDatasetDialogComponent, UpdatePhotoComponent, UserQuickComponent],
  exports: [LoginDialogComponent, 
    ErrorDialogComponent, 
    LogoutDialogComponent, 
    AddAlgorithmDialogComponent, 
    AccountDialogComponent, 
    ProfilepicDialogComponent, 
    OrganizationDialogComponent,
    CreateOrganizationComponent, 
    InviteDialogComponent, 
    NotificationDialogComponent, 
    ConfirmationDialogComponent, 
    InvitationNotifDialogComponent, 
    AddDatasetDialogComponent, UpdatePhotoComponent, UserQuickComponent],
  entryComponents: [LoginDialogComponent, 
    ErrorDialogComponent, 
    LogoutDialogComponent, 
    AddAlgorithmDialogComponent, 
    AccountDialogComponent, 
    ProfilepicDialogComponent, 
    OrganizationDialogComponent,
    CreateOrganizationComponent,
    InviteDialogComponent, 
    NotificationDialogComponent, 
    ConfirmationDialogComponent, 
    InvitationNotifDialogComponent, 
    AddDatasetDialogComponent, UpdatePhotoComponent, UserQuickComponent],
  providers: [
    DialogsService, AaService, OrganizationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class DialogsModule { }