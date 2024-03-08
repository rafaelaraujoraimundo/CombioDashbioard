import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CommercialFamily } from './interfaces/CommercialFamily'
import { PoTableColumn } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class CommercialfamiliesService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'https://combio-dts-prod-prime.totvscloud.com.br';
  private commercialfamiliesApi = '/api/dis/v1/commercialfamilies';
  private accessToken: any;


  getColumns(): Array<PoTableColumn> {
    return [
      { property: 'InternalId',label: 'Cod. Interno', width: '8%' },
      { property: 'Code', label: 'Codigo' },
      { property: 'UnitOfMeasureCode', label: 'Unid. Medida', },
      { property: 'Description', label: 'Descrição', },

    ];
  }

  getCommercialFamilies(page: number, pageSize: number): any {
    const url = `${this.baseUrl}${this.commercialfamiliesApi}`;
    this.accessToken = localStorage.getItem('accessToken');
    let params = new HttpParams();
    if (page) {
      params = params.set('page', page.toString());
    }
    if (pageSize) {
      params = params.set('pageSize', pageSize.toString());
    }
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${this.accessToken}` // Adiciona o token ao cabeçalho da requisição
      }),
      params: params
    };
    return this.http.get(url, httpOptions)

}

}
