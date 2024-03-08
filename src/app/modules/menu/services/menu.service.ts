import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private readonly subject: Subject<any> = new Subject<any>();

  getTitleMenu$(): Observable<any> {
    return this.subject.asObservable();
  }

  emitTitleMenu$(titleMenu: any) {
    this.subject.next(titleMenu);
  }
}
