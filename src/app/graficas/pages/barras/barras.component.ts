import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: []
})
export class BarrasComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData<"bar"> = {
    labels: [
      '2006', '2007', '2008', '2009', '2010', '2011', '2012' 
    ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FA69EE', hoverBackgroundColor: 'red' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#C15DDE', hoverBackgroundColor: 'red' },
      { data: [ 80, 58, 34, 94, 64, 7, 100 ], label: 'Series C', backgroundColor: '#B372F4', hoverBackgroundColor: 'red' },
    ]
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.horizontal);
    
    if (this.horizontal) {
      this.barChartType = 'line'
    }
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[1].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];

    this.barChartData.datasets[2].data = [
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100),
    ];
    this.chart?.update();
  }
}
