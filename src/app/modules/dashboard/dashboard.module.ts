import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeDashboardComponent } from './pages/home-dashboard/home-dashboard.component';
import { FluigComponent } from './pages/fluig/fluig.component';
import { PoChartModule, PoGaugeModule, PoWidgetModule } from '@po-ui/ng-components';


@NgModule({
  imports: [
    CommonModule,
    PoGaugeModule,
    PoChartModule,
    PoWidgetModule
    
  ],
  declarations: [HomeDashboardComponent, FluigComponent]
})
export class DashboardModule { }
