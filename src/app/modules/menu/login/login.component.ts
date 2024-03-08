import { Component } from '@angular/core';
import { PoPageLogin } from '@po-ui/ng-templates';
import { Router } from '@angular/router';
import { PoLanguage, PoNotificationService } from '@po-ui/ng-components';
import { LoginService } from './login.service';
import { MingleService } from '@totvs/mingle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isAuthenticated = false
  wallpaperLogin = '../../../../assets/login2.jpeg'
  logo = "../../../../assets/Combio.png"
  rememberUser = true
  constructor( private readonly router: Router,
    private readonly loginService: LoginService,
    private readonly notificationService: PoNotificationService,
    private mingleService: MingleService) {

    }

  public languages: Array<PoLanguage> = [
      { language: 'pt', description: 'Português' }
    ];

  login(dadosLogin: PoPageLogin): void {
       this.loginService.login(dadosLogin.login, dadosLogin.password)
  }

}
