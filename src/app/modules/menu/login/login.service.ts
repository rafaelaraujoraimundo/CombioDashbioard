import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PoNotificationService } from '@po-ui/ng-components';
import { MingleService } from '@totvs/mingle';
import { BehaviorSubject, Observable, buffer } from 'rxjs';
import { md5 } from 'js-md5'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private readonly router: Router,
    private readonly notificationService: PoNotificationService,
    private mingleService: MingleService,
    private http: HttpClient) { }

  private isAuthenticatedSource = new BehaviorSubject<Boolean>(false);
  private userSource = new BehaviorSubject<object>({});
  isAuthenticated$ = this.isAuthenticatedSource.asObservable();

  getIsAuthenticated$(): Observable<any> {
    return this.isAuthenticatedSource.asObservable();
  }

  setIsAuthenticated$(isOnline: boolean) {
      this.isAuthenticatedSource.next(isOnline);
  }
 getDisplayUser$(): Observable<any> {
  return this.userSource.asObservable();
}
setDisplayUser$(user: object) {
  this.userSource.next(user);
}


    // Utilizando o datasul para Login

  private baseUrl = 'https://combio-dts-prod-prime.totvscloud.com.br';
  private accessTokenEndpoint = '/api/auth/accesstoken';
  private userinfoEndpoint = '/api/framework/v1/users';
  private basicAuthHeader = '';
  private token: any;
  private isAuth: any;

  public login(user: string, password: string): void {
    this.basicAuthHeader = btoa(`${user}:${password}`)
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + this.basicAuthHeader,
    });

    this.http
      .get(this.baseUrl + this.accessTokenEndpoint, { headers, responseType: 'text' })
      .subscribe({
        next: (datalogin: any) => {
          this.getUser(user,password)
          localStorage.setItem('accessToken',datalogin)
          this.router.navigate(['home']);
          this.setIsAuthenticated$(true)
        },
        error:  (error: any) => {
          this.notificationService.error('Usuário ou senha inválidos.');
          console.error(error);

  }});

  }
  public getUser(user: string, password: string): void {
    this.basicAuthHeader = btoa(`${user}:${password}`)
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + this.basicAuthHeader,
    });
    this.http
      .get(this.baseUrl + this.userinfoEndpoint + '/?userName='+ user,  { headers, responseType: 'text' } )
      .subscribe({
        next: (datalogin: any) => {
          const jsonObject = JSON.parse(datalogin);
          const displayName = jsonObject.Resources[0].displayName;
          const email = jsonObject.Resources[0].emails[0].value;
          const userCombio = { Name: displayName, Email: email, avatar: 'https://www.gravatar.com/avatar/'+ this.convertMd5(email) }
          localStorage.setItem('userCombio', JSON.stringify(userCombio) )
          this.setDisplayUser$({ Name: displayName, Email: email, Avatar: 'https://www.gravatar.com/avatar/'+ this.convertMd5(email) })
        },
        error:  (error) => {
          console.error(error);

  }});

  }
  logout()
  {
    this.setIsAuthenticated$(false);
    localStorage.removeItem('accessToken')
    localStorage.removeItem('displayName')
    localStorage.removeItem('displayEmail')
    this.router.navigate(['login']);
  }
  private getTokenFromLocalStorage(): string | null {
    return localStorage.getItem('accessToken');
  }

  isAuthenticated() {
    this.refreshToken()
  }

  refreshToken() {
    this.token = this.getTokenFromLocalStorage()
    const headers = new HttpHeaders({
      Authorization: 'bearer ' + this.token,
    });

    this.http
      .get(this.baseUrl + this.accessTokenEndpoint , { headers, responseType: 'text' })
      .subscribe({
        next: (datalogin: any) => {
          localStorage.setItem('accessToken',datalogin)
          this.setIsAuthenticated$(true)
        },
        error:  (error) => {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('userCombio')
          console.error(error);
          this.setIsAuthenticated$(false)

  }});
  }

 // Utilizando o Mingle da Totvs para login

  login_migle(usuario: string, senha: string) {
      this.mingleService.auth.login(usuario,
        senha,
   "COMBIO PRD")
   .subscribe({
   next: (dataLogin: any) => {
   console.log("Login com sucesso - dados do login", dataLogin);
   this.setIsAuthenticated$(true)
   this.router.navigate(['home']);
   console.log("Login com sucesso - dados do login", dataLogin);
 }, error: (error: any) => {
   this.notificationService.error('Usuário ou senha inválidos.');
   console.error(error);
 }});
  }



  refreshTokenMigle(){
    const bodyRefreshToken = this.mingleService.getBodyToRefreshTokenAPI();
    const urlRefreshTOken = this.mingleService.getRefreshTokenURL();

    this.http.post(urlRefreshTOken, bodyRefreshToken).subscribe(resultAuth => console.log('Refresh',resultAuth))
  }

  convertMd5(string: string): string {
    return md5(string)
  }
}
