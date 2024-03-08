import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { fluigServidores } from '../../interface/dashboard.interface';
import { MenuService } from '../../../menu/services/menu.service';

@Component({
  selector: 'app-fluig',
  templateUrl: './fluig.component.html',
  styleUrls: ['./fluig.component.css']
})
export class FluigComponent implements OnInit {

  dataFluigServidores: fluigServidores[] = []
  public titleMenu: string = 'Dashboard Fluig';
  constructor(private dashboardService: DashboardService, private menuService: MenuService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.menuService.emitTitleMenu$(this.titleMenu);
    this.dashboardService.getFluigServidores().subscribe({
      next: (data: any) => {
        this.dataFluigServidores = data.items
        console.log(this.dataFluigServidores)
  
      }
    })
    this.cdr.detectChanges();
  }


}
