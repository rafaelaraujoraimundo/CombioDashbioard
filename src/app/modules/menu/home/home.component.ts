import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ViewChild } from '@angular/core';

import { PoModalComponent, PoTableColumn } from '@po-ui/ng-components';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public titleMenu: string = 'Home'
  constructor(private menuService: MenuService) {}

  updateTitleMenu() {
    this.menuService.emitTitleMenu$(this.titleMenu);
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.updateTitleMenu()
    }

    @ViewChild('detailsModal', { static: true })


    paymentLink: string = 'https://www.google.com.br/search?q=days+to+payment';
    itemsDetails: Array<any> | undefined;
    titleDetailsModal: string | undefined;
    typeChart: string = 'line';




}
