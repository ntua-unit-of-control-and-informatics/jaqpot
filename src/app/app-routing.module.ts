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

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountBaseComponent, canActivate: [AuthGuard]},
  {path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard]},
  {path: 'datasets', component: DatasetListComponent, canActivate: [AuthGuard]},
  {path: 'models', component: ModelsComponent, canActivate: [AuthGuard]},
  {path: 'dataset/detail', component: DatasetDetailComponent, data : {dataset : 'some value'}},
  {path: 'httk', component:  HttkBaseComponent, canActivate: [AuthGuard]},
  {path: 'httk/createmodel', component:  CreatehttkmodelComponent, canActivate: [AuthGuard]},
  {path: 'organization/:id', component:  OrganizationBaseComponent, canActivate: [AuthGuard]},
  {path: 'model/:id', component: ModelIdComponent},
  {path: 'dataset/:id', component:DatasetIdComponent},
  {path: 'workbench', component: WorkbenchBaseComponent, canActivate: [AuthGuard]},
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
