import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from '../../modules/menu/login/authenticated.guard';
import { NgModule } from '@angular/core';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';

const routes: Routes = [
  {path: '', component: HomeDashboardComponent, canActivate: [ AutenticacaoGuard ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutes { }