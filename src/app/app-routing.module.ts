import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AlgorithmsComponent } from './algorithms/algorithms-component/algorithms.component';
import { DatasetComponent } from './dataset/dataset-component/dataset.component';
import { ModelsComponent } from './models/models.component';
import { BaseComponent } from './base/base.component'; 
import { HomeComponent } from './home/home.component';
import { DatasetDetailComponent } from './dataset/dataset-detail/dataset-detail.component';
import { DatasetListComponent } from './dataset/dataset-list/dataset-list.component';
import { AuthGuardService as AuthGuard } from './session/auth-guard.service';
import {  HttkBaseComponent } from './httk/base/httk.base.component';
import { CreatehttkmodelComponent } from './httk/createhttkmodel/createhttkmodel.component';
import { AccountBaseComponent } from './account/account.base/account.base.component';
import { OrganizationBaseComponent } from './organization/organization-base/organization-base.component';
import {FrontComponent} from './front/front.component';
import { ModelIdComponent } from './models/model-id/model-id.component';
import { WorkbenchBaseComponent } from './workbench/workbench-base/workbench-base.component';
import { DatasetIdComponent } from './dataset/dataset-id/dataset-id.component';
import { SearchBaseComponent } from './search/search-base/search-base.component';
import { JaqpotNotificationsComponent } from './jaqpot-notifications/jaqpot-notifications.component';
import { HttkmodelsComponent } from './httk/httkmodels/httkmodels.component';
import { AccountHomeComponent } from './account-home/account-home.component';
import { EditAboutComponent } from './account-components/edit-about/edit-about.component';
import { CreateOrganizationComponent } from './dialogs/create-organization/create-organization.component';
import { OrganizationComponent } from './account-components/organization/organization.component';
import { NglComponent } from './NGL/ngl/ngl.component';
import { CreateOrgComponent } from './account-components/create-org/create-org.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home/shared/', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home/shared/:id', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountBaseComponent, canActivate: [AuthGuard]},
  {path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard]},
  {path: 'datasets', component: DatasetListComponent, canActivate: [AuthGuard]},
  {path: 'models', component: ModelsComponent, canActivate: [AuthGuard]},
  {path: 'dataset/detail', component: DatasetDetailComponent, data : {dataset : 'some value'}},
  {path: 'httk', component:  HttkBaseComponent, canActivate: [AuthGuard]},
  {path: 'httk/createmodel', component:  CreatehttkmodelComponent, canActivate: [AuthGuard]},
  {path: 'httk/models', component:  HttkmodelsComponent, canActivate: [AuthGuard]},
  // {path: 'organization/:id', component:  OrganizationBaseComponent, canActivate: [AuthGuard]},
  {path: 'model/:id', component: ModelIdComponent},
  {path: 'dataset/:id', component:DatasetIdComponent},
  {path: 'workbench', component: WorkbenchBaseComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchBaseComponent, canActivate: [AuthGuard]},
  {path: 'notifications', component: JaqpotNotificationsComponent, canActivate: [AuthGuard]},
  {path: "account/home", component: AccountHomeComponent, canActivate: [AuthGuard]},
  {path:'edit/about', component:EditAboutComponent},
  {path:'create/organization', component:CreateOrgComponent},
  {path: 'organization/:id', component:  OrganizationComponent},
  {path: 'edit/org/:id', component:EditAboutComponent},
  {path: 'viewer', component:NglComponent},
  {path: '', component:  FrontComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
