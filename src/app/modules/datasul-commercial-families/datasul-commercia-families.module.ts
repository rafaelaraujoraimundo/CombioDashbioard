import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommercialFamiliesListComponent } from './commercial-families-list/commercial-families-list.component';
import { PoModule, PoTableModule } from '@po-ui/ng-components';



@NgModule({
  declarations: [
    CommercialFamiliesListComponent
  ],
  imports: [
    CommonModule, PoModule, PoTableModule
  ]
})
export class DatasulCommerciaFamiliesModule { }
