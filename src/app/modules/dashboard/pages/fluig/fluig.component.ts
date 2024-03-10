import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { fluigServidores } from '../../interface/dashboard.interface';
import { MenuService } from '../../../menu/services/menu.service';
import { PoChartType, PoGaugeRanges } from '@po-ui/ng-components';

@Component({
  selector: 'app-fluig',
  templateUrl: './fluig.component.html',
  styleUrls: ['./fluig.component.css']
})
export class FluigComponent implements OnInit {

  dataFluigServidores: fluigServidores[] = []
  public titleMenu: string = 'Dashboard Fluig';

  line: PoChartType = PoChartType.Line;
  column: PoChartType = PoChartType.Column;
  donut: PoChartType = PoChartType.Donut;
  bar: PoChartType = PoChartType.Bar;

  widgetHeight: number = 400
  urlBancoDados: String = '../../../../assets/Mysql_logo.png'

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

  gauges = [
    { value: 1200 , description: 'Memoria Usada 1200Mb' },
  ];

  pieUsing = [
    { label: 'Angular', data: 100 },
    { label: 'React', data: 10 }
  ]

  MemoriaUsadaRanges: Array<PoGaugeRanges> = [
    { from: 0, to: 3999, label: 'Baixa Utilização', color: '#00b28e' },
    { from: 4000, to: 4999, label: 'Utilização Média', color: '#ea9b3e' },
    { from: 5000, to: 6000, label: 'Alta Utilização', color: '#c64840' }
  ];

  // Dados para o Gráfico de Linha
  lineChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Série B' }
  ];

  // Dados para o Gráfico de Barra
  barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Série A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Série B' }
  ];

  // Categorias para os gráficos
  chartCategories = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho'];
}



