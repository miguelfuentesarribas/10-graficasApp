import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';
import { subscribeOn } from 'rxjs';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  public doughnutChartLabels: string[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];

  metodo() {
    
    console.log(this.doughnutChartData.datasets[0].data.length);
  }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [
        // 350, 450, 100 
        ], backgroundColor: ["#47E6FA", "#3DDBB8", "#41F08D"]},
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  } 

  constructor(private gs: GraficasService) { }

  ngOnInit(): void {
    // this.gs.getUsersSocialMedia()
    //   .subscribe( data => {
    //     const labels = Object.keys( data );
    //     this.doughnutChartData.labels = labels;

    //     const values = Object.values(data);
    //     this.doughnutChartData.datasets[0].data = values;
    //   })

    this.gs.getUsersSocialMediaDonnaData()
      .subscribe( ({labels, values}) => {
        this.doughnutChartData.labels = labels;
        this.doughnutChartData.datasets[0].data = values;        
      })
  }

}
