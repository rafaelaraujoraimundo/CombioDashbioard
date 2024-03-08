import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { FluigComponent } from './pages/fluig/fluig.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeDashboardComponent, FluigComponent]
})
export class DashboardModule { }
