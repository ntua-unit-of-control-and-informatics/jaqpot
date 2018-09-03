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

const routes: Routes=[
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'account', component: AccountBaseComponent, canActivate: [AuthGuard]},
  {path: 'algorithms', component: AlgorithmsComponent, canActivate: [AuthGuard]},
  {path: 'datasets', component: DatasetListComponent, canActivate: [AuthGuard]},
  {path: 'models', component: ModelsComponent, canActivate: [AuthGuard]},
  {path: 'dataset/detail', component: DatasetDetailComponent, data : {dataset : 'some value'}},
  {path: 'httk', component:  HttkBaseComponent, canActivate: [AuthGuard]},
  {path: 'httk/createmodel', component:  CreatehttkmodelComponent, canActivate: [AuthGuard]},
  {path: 'organization/:id', component:  OrganizationBaseComponent, canActivate: [AuthGuard]}
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
