import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styles: [
    `
      button {
        border: 0.5px lightgray solid;
        border-radius: 4px;
        padding: 2px 4px;
      }
    `
  ]
})
export class BarsComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    // scales: { xAxes: [{}], yAxes: [{}] },
  };
  public barChartLabels: Label[] = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#264653', hoverBackgroundColor: '#2d6e8a' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#e9c46a', hoverBackgroundColor: '#ffcd4e' },
    { data: [6, 28, 44, 29, 66, 47, 70], label: 'Series C', backgroundColor: '#e76f51', hoverBackgroundColor: '#ff6d48' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public randomize(): void {

    this.barChartData.forEach(set => {
      set.data = [
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100),
        Math.round(Math.random() * 100)
      ];
    }
    )

    // this.barChartData.forEach(set => {
    //   set.data!.forEach(el => {
    //     // el = Math.round(Math.random() * 100)
    //     return el = Math.round(Math.random() * 100)
    //   })
    // })
  }

}
