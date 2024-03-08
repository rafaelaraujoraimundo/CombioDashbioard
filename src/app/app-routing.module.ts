
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './modules/menu/home/home.component';
import { LoginComponent } from './modules/menu/login/login.component';
import { AutenticacaoGuard } from './modules/menu/login/authenticated.guard';


const routes: Routes = [

  {
   path: 'user', loadChildren: () => import('./modules/user/user-routing.module').then( m=> m.AppRoutingModule),
   canActivate: [ AutenticacaoGuard ]

  },
  {
    path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.routing').then( m=> m.DashboardRoutes),
    canActivate: [ AutenticacaoGuard ]
 
   },
  {
    path: 'commercial-families', loadChildren: () => import('./modules/datasul-commercial-families/commercial-families.routing').then( m=> m.CommercialFamiliesRoutes),
    canActivate: [ AutenticacaoGuard ]

   },
  {path: 'home', component: HomeComponent, canActivate: [ AutenticacaoGuard ]},
  {path: 'login', component: LoginComponent},
  {
    path: '',
    component: HomeComponent, canActivate: [ AutenticacaoGuard ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
