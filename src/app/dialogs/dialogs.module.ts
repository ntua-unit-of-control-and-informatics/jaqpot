import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginDialogComponent } from './login-logout-dialog/login-dialog.component';
import { DialogsService } from './dialogs.service';
import { FormsModule, FormControlDirective, FormGroupDirective, ReactiveFormsModule } from '@angular/forms'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatChipsModule} from '@angular/material/chips'
import {MatDialogModule} from '@angular/material//dialog'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import {MatRadioModule} from '@angular/material/radio'
import {MatSelectModule} from '@angular/material/select'
import {MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule} from '@angular/material/slide-toggle'
import {MatStepperModule} from '@angular/material/stepper'
import {MatTabsModule} from '@angular/material/tabs'
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTableModule} from '@angular/material/table'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatListModule} from '@angular/material/list'
import { JaqpotClientModule } from '../jaqpot-client/jaqpot-client.module'
import { UiModelsModule } from '../ui-models/ui-models.module';
import { Credentials } from '../ui-models/credentials';
import { LogoutDialogComponent } from './login-logout-dialog/logout-dialog.component';
import { AddAlgorithmDialogComponent } from './add-algorithm-dialog/add-algorithm-dialog.component';
import { MaterialModule } from '../app.module';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
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
import { AddImageDatasetDialogComponent } from './add-image-dataset-dialog/add-image-dataset-dialog.component';
import { ShareDialogComponent } from './share-dialog/share-dialog.component';
import { NotificationService } from '../jaqpot-client/api/notification.service';
import { ShareNotifDialogComponent } from './notification-dialogs/share-notif-dialog/share-notif-dialog.component';
import { AskForIdComponent } from './ask-for-id/ask-for-id.component';
import { AddAdministratorComponent } from './add-administrator/add-administrator.component';
import { CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { AffiliationsDialogComponent } from './affiliations-dialog/affiliations-dialog.component';
import { AffiliationNotifComponent } from './notification-dialogs/affiliation-notif/affiliation-notif.component';
import { BrokenAffilNotifComponent } from './notification-dialogs/broken-affil-notif/broken-affil-notif.component';
import { FyiNotifComponent } from './notification-dialogs/fyi-notif/fyi-notif.component';
import { ChooseXYComponent } from './choose-x-y/choose-x-y.component';
import { MatOptionModule } from '@angular/material/core';
import { ManageAccountsDialogComponent } from './manage-accounts-dialog/manage-accounts-dialog.component';
import { SeeInvitationsComponentComponent } from './see-invitations-component/see-invitations-component.component';
import { RequestComponent } from './request/request.component';
import { RequestCreditsComponent } from './request-credits/request-credits.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MessageComponent } from './message/message.component';
import { InviteComponent } from './invite/invite.component';
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
    FormsModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    DragDropModule,MatSlideToggleModule
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
    AddDatasetDialogComponent,
    UpdatePhotoComponent, 
    UserQuickComponent, 
    AddImageDatasetDialogComponent, ShareDialogComponent, 
    ShareNotifDialogComponent, AskForIdComponent, AddAdministratorComponent, 
    AffiliationsDialogComponent, AffiliationNotifComponent, BrokenAffilNotifComponent, FyiNotifComponent, ChooseXYComponent, ManageAccountsDialogComponent, SeeInvitationsComponentComponent, RequestComponent, RequestCreditsComponent, ConfirmationComponent, MessageComponent, InviteComponent],
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
    AddDatasetDialogComponent, 
    UpdatePhotoComponent, 
    UserQuickComponent, 
    AddImageDatasetDialogComponent, 
    ShareDialogComponent, ShareNotifDialogComponent, 
    AskForIdComponent, AddAdministratorComponent, 
    AffiliationsDialogComponent, AffiliationNotifComponent, BrokenAffilNotifComponent, FyiNotifComponent, ChooseXYComponent, ManageAccountsDialogComponent] ,
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
    AddDatasetDialogComponent, 
    UpdatePhotoComponent, 
    UserQuickComponent, 
    AddImageDatasetDialogComponent, 
    ShareDialogComponent, 
    ShareNotifDialogComponent, 
    AskForIdComponent, AddAdministratorComponent, 
    AffiliationsDialogComponent, AffiliationNotifComponent, BrokenAffilNotifComponent, FyiNotifComponent, ChooseXYComponent, ManageAccountsDialogComponent],
  providers: [
    DialogsService, OrganizationService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class DialogsModule { }