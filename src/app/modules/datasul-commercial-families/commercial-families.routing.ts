import { Routes, RouterModule } from '@angular/router';
import { CommercialFamiliesListComponent } from './commercial-families-list/commercial-families-list.component';
import { AutenticacaoGuard } from '../../modules/menu/login/authenticated.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: CommercialFamiliesListComponent, canActivate: [ AutenticacaoGuard ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CommercialFamiliesRoutes { }
