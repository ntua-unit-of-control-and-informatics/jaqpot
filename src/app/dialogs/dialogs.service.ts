import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDialogComponent } from './login-logout-dialog/login-dialog.component';
import { MatDialogRef, MatDialog } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Credentials } from '../ui-models/credentials';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { Response } from '@angular/http/src/static_response';
import { ErrorReport } from '../ui-models/errorReport';
import { Organization } from '../jaqpot-client/model/organization';
import { OrganizationDialogComponent } from './organization-dialog/organization-dialog.component';
import { OrganizationService } from '../jaqpot-client/api/organization.service';
import { InviteDialogComponent } from './invite-dialog/invite-dialog.component';
import { UserService } from '../jaqpot-client/api/user.service';
import { NotificationFactoryService } from '../jaqpot-client/factories/notification-factory.service';
import { NotificationService } from '../jaqpot-client/api/notification.service';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { InvitationNotifDialogComponent } from './notification-dialogs/invitation-notif-dialog/invitation-notif-dialog.component';
import { Notification } from '../jaqpot-client/model/notification';
import { AddDatasetDialogComponent } from './add-dataset-dialog/add-dataset-dialog.component';
import { UpdatePhotoComponent } from './update-photo/update-photo.component';
import { UserQuickComponent } from './user-quick/user-quick.component';
import { User } from '../jaqpot-client';

@Injectable()
export class DialogsService {

    private _errorReport:ErrorReport;

    constructor(private dialog: MatDialog){}

    public confirm(): Observable<Credentials> {
        let dialogRef: MatDialogRef<LoginDialogComponent>;
        dialogRef = this.dialog.open(LoginDialogComponent);

        return dialogRef.afterClosed();
    }

    public close(){
        this.dialog.closeAll();
    }

    public updatePhoto(userApi, datasetApi, modelApi){
        let dialogRef: MatDialogRef<UpdatePhotoComponent>;
        dialogRef = this.dialog.open(UpdatePhotoComponent)
        dialogRef.componentInstance.datasetApi = datasetApi
        dialogRef.componentInstance.modelApi = modelApi
        dialogRef.componentInstance.userApi = userApi
        return dialogRef.afterClosed()
    }

    public quickUser(userApi, user:User){
        let dialogRef: MatDialogRef<UserQuickComponent>;
        dialogRef = this.dialog.open(UserQuickComponent)
        dialogRef.componentInstance.userApi = userApi
        dialogRef.componentInstance.user = user
        return dialogRef.afterClosed()
    }

    public addDataset(csv, filename, datasetFactory, featureApi, datasetApi)
    {
        let dialogRef: MatDialogRef<AddDatasetDialogComponent>;
        dialogRef = this.dialog.open(AddDatasetDialogComponent);
        dialogRef.componentInstance.csv = csv
        dialogRef.componentInstance.file_name = filename
        dialogRef.componentInstance.datasetFactory = datasetFactory
        dialogRef.componentInstance.featureApi = featureApi
        dialogRef.componentInstance.datasetApi = datasetApi
        return dialogRef.afterClosed()
    }

    public confirmDeletion(){
        let dialogRef: MatDialogRef<ConfirmationDialogComponent>;
        dialogRef = this.dialog.open(ConfirmationDialogComponent);
        return dialogRef.afterClosed();
    }

    public openActualNotifDialog(notification:Notification, 
        organizationService:OrganizationService,
        notificationService:NotificationService,
        userService:UserService){
        if(notification.type === "INVITATION"){
            let dialogRef: MatDialogRef<InvitationNotifDialogComponent>;
            dialogRef = this.dialog.open(InvitationNotifDialogComponent);
            dialogRef.componentInstance.organizationService = organizationService
            dialogRef.componentInstance.notificationService = notificationService
            dialogRef.componentInstance.userService = userService
            dialogRef.componentInstance.notification = notification
            return dialogRef.afterClosed();
        }
    }

    public onOrganizationView(organization:Organization, organizationService:OrganizationService){
        let dialogRef: MatDialogRef<OrganizationDialogComponent>;
        dialogRef = this.dialog.open(OrganizationDialogComponent)
        dialogRef.componentInstance.organization = organization
        dialogRef.componentInstance.organizationService = organizationService
        return dialogRef.afterClosed();
    }

    public inviteToOrganization(userService:UserService,
        notifFactory:NotificationFactoryService,
        organization:Organization,
        notificationService:NotificationService)
    {
        let dialogRef: MatDialogRef<InviteDialogComponent>;
        dialogRef = this.dialog.open(InviteDialogComponent);
        dialogRef.componentInstance.userService = userService;
        dialogRef.componentInstance.notifFactory = notifFactory
        dialogRef.componentInstance.organization = organization
        dialogRef.componentInstance.notificationService = notificationService
        return dialogRef.afterClosed();
    }

    public onError(error:Response){
        let dialogRef: MatDialogRef<ErrorDialogComponent>;
        dialogRef = this.dialog.open(ErrorDialogComponent);
        dialogRef.componentInstance.httpStatus = error.json().httpStatus;
        dialogRef.componentInstance.details = error.json().details;
        dialogRef.componentInstance.message = error.json().message;
        return dialogRef.afterClosed();
    }

}
