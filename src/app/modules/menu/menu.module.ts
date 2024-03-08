import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomemenuComponent } from './homemenu/homemenu.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTableModule } from '@po-ui/ng-components';
import { PoWidgetModule } from '@po-ui/ng-components';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { AutenticacaoGuard } from './login/authenticated.guard';


@NgModule({
  declarations: [
    HomemenuComponent, HomeComponent, LoginComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    RouterModule, PoTableModule, PoWidgetModule, PoPageLoginModule
  ],
  exports: [HomemenuComponent]
})
export class MenuModule { }
