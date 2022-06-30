import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-barras-dobles',
  templateUrl: './barras-dobles.component.html',
  styleUrls: []
})
export class BarrasDoblesComponent {

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };

  public barChartType: ChartType = 'bar';

  proveedoresData: ChartData<'bar'> = {
    labels: [ '2020', '2021', '2022', '2023', '2024', '2025' ],
    datasets: [
      { data: [ 100, 200, 300, 400, 500 ], label: 'Series A'},
      { data: [ 50, 250, 30, 450, 200 ], label: 'Series B'},
    ]
  };

  productoData: ChartData<'bar'> = {
    labels: [ '2021', '2022', '2023', '2024', '2025', '2026', '2027' ],
    datasets: [
      { data: [ 200, 300, 400, 300, 100 ], label: 'Carros'},
    ]
  };

}
