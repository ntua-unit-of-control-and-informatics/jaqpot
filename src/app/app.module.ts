import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {A11yModule} from '@angular/cdk/a11y';
import {BidiModule} from '@angular/cdk/bidi';
import {ObserversModule} from '@angular/cdk/observers';
import {OverlayModule} from '@angular/cdk/overlay';
import {PlatformModule} from '@angular/cdk/platform';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {OverlayContainer} from '@angular/cdk/overlay';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips'
import {MatDialogModule} from '@angular/material/dialog'
import {MatGridListModule} from '@angular/material/grid-list'
import {MatLegacyProgressBarModule as MatProgressBarModule} from '@angular/material/legacy-progress-bar'
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner'
import {MatLegacyRadioModule as MatRadioModule} from '@angular/material/legacy-radio'
import {MatLegacySelectModule as MatSelectModule} from '@angular/material/legacy-select'
import {MatLegacySlideToggleModule as MatSlideToggleModule, _MatLegacySlideToggleRequiredValidatorModule as _MatSlideToggleRequiredValidatorModule} from '@angular/material/legacy-slide-toggle'
import {MatStepperModule} from '@angular/material/stepper'
import {MatLegacyTabsModule as MatTabsModule} from '@angular/material/legacy-tabs'
import {MatLegacyAutocompleteModule as MatAutocompleteModule} from '@angular/material/legacy-autocomplete'
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table'
import {MatIconModule} from '@angular/material/icon'
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button'
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field'
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input'
import {MatExpansionModule} from '@angular/material/expansion'
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip'
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list'
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator'
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar'
import {MatBadgeModule} from '@angular/material/badge'
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu'
import {AppComponent} from './app.component';

// import { DialogsModule } from './dialogs/dialogs.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SessionService } from './session/session.service';
import { Subscription } from 'rxjs';
import { BaseComponent } from './base/base.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms-component/algorithms.component';
import { ModelsComponent } from './models/models.component';
import { DatasetComponent } from './dataset/dataset-component/dataset.component';
import { HomeComponent } from './home/home.component';
import { AlgorithmsListComponent } from './algorithms/algorithms-list/algorithms-list.component';
import { DatasetListComponent } from './dataset/dataset-list/dataset-list.component';
import { Router } from '@angular/router';
import { SessionModule } from './session/session.module';
import { AlgorithmDetailComponent } from './algorithms/algorithm-detail/algorithm-detail.component';
import { DatasetDetailComponent } from './dataset/dataset-detail/dataset-detail.component';
import { AuthModule, OidcSecurityService, OidcConfigService } from 'angular-auth-oidc-client';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import {  HttkBaseComponent } from './httk/base/httk.base.component';
import { CreatehttkmodelComponent } from './httk/createhttkmodel/createhttkmodel.component';
import { ParameterlistComponent } from './base/components/parameterlist/parameterlist.component';
import { ParameterstepsComponent } from './base/components/parametersteps/parametersteps.component';
import { AccountBaseComponent } from './account/account.base/account.base.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { SocialBaseComponent } from './account/social.base/social.base.component';
import { QuotaComponent } from './account/quota/quota.component';
import { OrganizationsComponent } from './account/organizations/organizations.component';
import { OrganizationBaseComponent } from './organization/organization-base/organization-base.component';
import { OrganizationDetailsComponent } from './organization/organization-details/organization-details.component';
import { OrganizationUsersComponent } from './organization/organization-users/organization-users.component';
import { NotificationComponent } from './bar-components/notification/notification.component';
import { FrontComponent } from './front/front.component';
import { DialogsModule } from './dialogs/dialogs.module';
import { DatasetApiFacadeService } from './services/facades/dataset-api-facade.service';
import { DataModelViewComponent } from './home/data-model-view/data-model-view.component';
import { ModelIdComponent } from './models/model-id/model-id.component';
import { WorkbenchBaseComponent } from './workbench/workbench-base/workbench-base.component';
import { DatasetIdComponent } from './dataset/dataset-id/dataset-id.component';
import { MarkdownComponent } from './base/markdown/markdown.component';
import { CommentsComponent } from './base/comments/comments.component';
import { QuickViewComponent } from './home/quick-view/quick-view.component';
import { ModelFeaturesComponent } from './models/model-features/model-features.component';
import { PredictValidateComponent } from './models/predict-validate/predict-validate.component';
import { PredictedComponent } from './base/predicted/predicted.component';
import { SimpleDatasetComponent } from './base/simple-dataset/simple-dataset.component';
import { ValidateComponent } from './models/validate/validate.component';
import { ValidationReportComponent } from './base/validation-report/validation-report.component';
import { SearchAllComponentComponent } from './bar-components/search-all-component/search-all-component.component';
import { SearchBaseComponent } from './search/search-base/search-base.component';
import { SearchQuickViewComponent } from './search/search-quick-view/search-quick-view.component';
import { PredArchiveComponent } from './models/pred-archive/pred-archive.component';
import { JaqpotNotificationsComponent } from './jaqpot-notifications/jaqpot-notifications.component';
import { ViewNotifsComponent } from './jaqpot-notifications/view-notifs/view-notifs.component';
import { HttkmodelsComponent } from './httk/httkmodels/httkmodels.component';
import { PbpkPredictedComponent } from './base/pbpk-predicted/pbpk-predicted.component';
import { MultiLineComponent } from './d3/multi-line/multi-line.component';
import { map, switchMap } from 'rxjs/operators';
import { configf } from './config/conf';
import { Config } from './config/config';
import { MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { ModelMetaComponent } from './models/model-meta/model-meta.component';

import { ChartComponentComponent } from './base/components/chart-component/chart-component.component';
import { NgApexchartsModule } from "ng-apexcharts";
import {MatLegacyCheckboxModule as MatCheckboxModule} from '@angular/material/legacy-checkbox';
import { InvitationsComponent } from './invitations/invitations.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { UserBaseComponent } from './account-components/user-base/user-base.component';
import { EditAboutComponent } from './account-components/edit-about/edit-about.component';
import { CreateOrgComponent } from './account-components/create-org/create-org.component';
import { OrganizationComponent } from './account-components/organization/organization.component';
import { QuotsComponent } from './account-components/quots/quots.component';
import { OrgsBaseComponent } from './account-components/orgs-base/orgs-base.component';
import { UserListComponent } from './account-components/user-list/user-list.component';
import { MatTreeModule } from '@angular/material/tree';
import { NglComponent } from './NGL/ngl/ngl.component';

// import { EucliaAccounts } from '@euclia/accounts-client';
/**
 * NgModule that includes all Material modules that are required to serve 
 * the Plunker.
 */

// export function loadConfig(oidcConfigService: OidcConfigService) {
//   console.log('APP_INITIALIZER STARTING');
//   return () => oidcConfigService.load_using_stsServer('http://147.102.86.129:30008/auth/realms/Jaqpan');
// }

@NgModule({
  exports: [
    // CDK
    A11yModule,
    BidiModule,
    ObserversModule,
    OverlayModule,
    PlatformModule,
    PortalModule,
    CdkStepperModule,
    CdkTableModule,
    ScrollingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatCardModule,
    MatPaginatorModule,
    MatSidenavModule,
    MatInputModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatPseudoCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatGridListModule,
    MatTreeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatBadgeModule,
    MatFormFieldModule, MatInputModule,
    MatFormFieldModule
  ],
  declarations: [],

  providers: [
    // OidcConfigService,
    // {
    //     provide: APP_INITIALIZER,
    //     useFactory: loadConfig,
    //     deps: [OidcConfigService],
    //     multi: true
    // }
  ]
})
export class MaterialModule {}

@NgModule({

  imports: [
    BrowserModule,
    NgApexchartsModule,
    MatCheckboxModule,
    // EucliaAccounts,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogsModule,
    // HttpModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    ImageCropperModule,
    // NgxPicaModule,
    FlexLayoutModule,
    MarkdownModule.forRoot(),
    // AuthModule.forRoot( { storage:SecurityStorage } ),
    AuthModule.forRoot( ),
    CommonModule,
    
  ],
  exports: [DialogsModule, MaterialModule, AppRoutingModule, RouterModule, MatFormFieldModule, MatInputModule],
  declarations: [AppComponent,
    NglComponent,
    ModelMetaComponent,
    AccountHomeComponent,
    UserBaseComponent,
    EditAboutComponent, CreateOrgComponent, OrganizationComponent, QuotsComponent, OrgsBaseComponent, UserListComponent,
    InvitationsComponent,
    BaseComponent,
    ModelMetaComponent,
    AlgorithmsComponent,
    AlgorithmsListComponent,
    AlgorithmDetailComponent,
    DatasetComponent,
    DatasetListComponent,
    DatasetDetailComponent,
    ModelsComponent,
    ModelFeaturesComponent,
    PredictValidateComponent,
    HomeComponent,
    HttkBaseComponent,
    HttkmodelsComponent,
    CreatehttkmodelComponent,
    ParameterlistComponent,
    ParameterstepsComponent,
    AccountBaseComponent,
    SocialBaseComponent,
    ChartComponentComponent,
    QuotaComponent,
    OrganizationsComponent,
    OrganizationBaseComponent,
    OrganizationDetailsComponent,
    OrganizationUsersComponent,
    NotificationComponent,
    FrontComponent,
    DataModelViewComponent,
    ModelIdComponent,
    DatasetIdComponent,
    WorkbenchBaseComponent,
    CommentsComponent,
    QuickViewComponent,
    MarkdownComponent,
    PredictedComponent,
    SimpleDatasetComponent,
    ValidateComponent,
    ValidationReportComponent,SearchAllComponentComponent,SearchBaseComponent, SearchQuickViewComponent,
    PredArchiveComponent, JaqpotNotificationsComponent, ViewNotifsComponent ,PbpkPredictedComponent,MultiLineComponent
  ],
  bootstrap: [AppComponent],
  providers: [SessionService, OidcConfigService,
    {
        provide: APP_INITIALIZER,
        useFactory: configureAuth,
        deps: [OidcConfigService, HttpClient],
        multi: true,
    }],
  entryComponents: []
})
export class AppModule {

  subscription:Subscription;
  theme:string;
  constructor(private overlayContainer: OverlayContainer
              , private sessionService: SessionService
              , private oidcConfigService: OidcConfigService
              , public oidcSecurityService: OidcSecurityService) {
    
    var _theme = sessionService.get('theme');
    if(_theme === 'dark-theme'){
      this.overlayContainer.getContainerElement().classList.remove('default-theme'); 
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
    }else{
      this.overlayContainer.getContainerElement().classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('default-theme');
    }

    this.subscription= this.sessionService
    .getTheme().subscribe(theme => {
      var the = (<any>Object).values(theme);
      if(the[0] === 'dark-theme'){
        this.theme = 'dark-theme';
        this.overlayContainer.getContainerElement().classList.remove('default-theme'); 
        this.overlayContainer.getContainerElement().classList.add('dark-theme');
      }else{
        this.theme = 'default-theme'
        this.overlayContainer.getContainerElement().classList.remove('dark-theme');
        this.overlayContainer.getContainerElement().classList.add('default-theme');
      }
    }
  )

  }

  changeTheme(theme:string){
    this.overlayContainer.getContainerElement().classList.add(theme);
  }
}

export function configureAuth(oidcConfigService: OidcConfigService, httpClient: HttpClient) {
  const setupAction$ = httpClient.get<any>(`/assets/conf.json`).pipe(
      map((customConfig:configf) => {
        Config.JaqpotBase = customConfig.jaqpotApi
        Config.AccountsApi = customConfig.accountsApi
        // Config.AccountsApi = customConfig.accountsApi
        // console.log("Accounts api at:")
        // console.log(Config.AccountsApi)
          return {
              stsServer: customConfig.stsServer,
              redirectUrl: customConfig.redirect_url,
              clientId: customConfig.client_id,
              responseType: customConfig.response_type,
              scope: customConfig.scope,
              // postLogoutRedirectUri: customConfig.baseurl,
              // startCheckSession: customConfig.start_checksession,
              // silentRenew: customConfig.silent_renew,
              silentRenewUrl: customConfig.silent_redirect_url,
              postLogoutRedirectUri: window.location.origin,
              // postLoginRoute: customConfig.baseurl,
              // forbiddenRoute: customConfig.baseurl,
              // unauthorizedRoute: customConfig.baseurl,
              logLevel: LogLevel.Debug, // LogLevel.Debug,
              maxIdTokenIatOffsetAllowedInSeconds: 120,
              historyCleanupOff: true,
              autoUserinfo: true,
              storage: localStorage
          };
      }),
      switchMap((config) => oidcConfigService.withConfig(config))
  );

  return () => setupAction$.toPromise();
}


declare global {
  interface Navigator {
      msSaveBlob?: (blob: any, defaultName?: string) => boolean
  }
}