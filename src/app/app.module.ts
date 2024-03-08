import { MingleService } from '@totvs/mingle';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { AppInitService } from './services/appinitservice.service';
import { UserModule } from './modules/user/user.module';
import { MenuModule } from './modules/menu/menu.module';

import { DashboardModule } from './modules/dashboard/dashboard.module';
import { DatasulCommerciaFamiliesModule } from './modules/datasul-commercial-families/datasul-commercia-families.module';


export function initializeApp1(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.mingleConfiguration();
  }
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    UserModule,
    MenuModule,
    BrowserAnimationsModule,
    DatasulCommerciaFamiliesModule,
    DashboardModule,

  ],
  providers: [AppInitService,
    MingleService,
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps:[AppInitService], multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
