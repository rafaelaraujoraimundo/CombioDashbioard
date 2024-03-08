import { CommercialfamiliesService } from './../commercialfamilies.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { MenuService } from '../../menu/services/menu.service';


@Component({
  selector: 'app-commercial-families-list',
  templateUrl: './commercial-families-list.component.html',
  styleUrls: []
})
export class CommercialFamiliesListComponent implements OnInit {
  private page = 1;
  private pageSize = 50;
  public CommercialFamilieslist: any[] = [];
  private dataCommercialFamilies: any
  public height: number = 800
  public actionRightSide: boolean = true
  constructor(private commercialfamiliesService: CommercialfamiliesService, private menuService: MenuService, private cdr: ChangeDetectorRef ) {}
  public titleMenu: string = 'Commercial Families';

public columns: Array<PoTableColumn> = [

    { property: 'Code', label: 'Codigo' },
    { property: 'UnitOfMeasureCode', label: 'Unid. Medida', },
    { property: 'Description', label: 'Descrição', },
    {
      property: 'action',
      label: 'Ações',
      type: 'icon',
      sortable: false,
      icons: [
        {
          action: this.updateCommercialFamilies.bind(this),
          icon: 'po-icon-edit',
          tooltip: 'Editar Familia Comercial',
          value: 'edit'
        },
        {
          action: this.deleteCommercialFamilies.bind(this),
          icon: 'po-icon-delete',
          tooltip: 'Excluir Familia Comercial',
          value: 'delete'
        }

  ]
}
]

// Botoes depois do ...
actions: Array<PoTableAction> = [
  { action: this.updateCommercialFamilies.bind(this), icon: 'po-icon-edit', label: 'Alterar'},
  { action: this.deleteCommercialFamilies.bind(this), icon: 'po-icon-delete', label: 'Excluir' }
];

updateCommercialFamilies(item: any){
  console.log(item)
}

deleteCommercialFamilies(item: any) {
  console.log(item)
}

ngOnInit() {
  this.updateTitleMenu()
  this.loadCommercialFamilies()
  this.cdr.detectChanges();
}

updateTitleMenu() {
  this.menuService.emitTitleMenu$(this.titleMenu);
}

loadCommercialFamilies() {
  this.commercialfamiliesService.getCommercialFamilies(this.page, this.pageSize).subscribe({
    next: (data: any) => {
      this.dataCommercialFamilies = data
     this.dataCommercialFamilies.items.forEach( (data: any) => {
      console.log(data)
      if (data.InternalId != '') {
        data.action = ['edit', 'delete'];
        this.CommercialFamilieslist.push(data)
      }

     })

    }
  })

}

loadNextPage() {
  this.page++;
  this.loadCommercialFamilies();
}

}
