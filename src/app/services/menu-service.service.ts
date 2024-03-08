import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  private titleMenuSource = new BehaviorSubject<string>('');

  titleMenu$ = this.titleMenuSource.asObservable();

  setTitleMenu(titleMenu: string) {
    this.titleMenuSource.next(titleMenu);
  }
  constructor() { }

}
