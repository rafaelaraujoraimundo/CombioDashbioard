import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'https://combio-dts-prod-prime.totvscloud.com.br/dts/datasul-rest/resources/prg/';
  private accessToken: any;


   getFluigServidores() {
    const url = `${this.baseUrl}esp/combio/v1/api_fluig`;
    this.accessToken = localStorage.getItem('accessToken')

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.accessToken}` // Adiciona o token ao cabeçalho da requisição
      })
    };
    return this.http.get(url, httpOptions)

}
}