import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private accessToken: any;
  constructor(private http: HttpClient) {}

  getAllUsers(page: number, pageSize: number) {
    this.accessToken = localStorage.getItem('accessToken');
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }
    const options = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.accessToken}`
      }),
      params: params
    };

    return this.http.get('https://combio-dts-prod-prime.totvscloud.com.br/api/btb/v1/usuarios', options );
  }
}
