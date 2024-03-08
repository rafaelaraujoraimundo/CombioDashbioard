import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly loginService: LoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    this.loginService.refreshToken()
    this.loginService.getIsAuthenticated$().subscribe({
      next: ((data) => {return data}),
      error: ((error) => {return this.router.createUrlTree(['login'])})
    })

  }
}
