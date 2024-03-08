
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { HomeComponent } from './pages/home/home.component';
import { PoModule } from '@po-ui/ng-components';
import { PoTableModule } from '@po-ui/ng-components';
import { UserService } from './services/user-service.service';




@NgModule({
  declarations: [
    UserListComponent,
    HomeComponent

  ],
  imports: [
    CommonModule, PoModule, PoTableModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }
