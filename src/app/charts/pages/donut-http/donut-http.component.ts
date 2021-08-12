import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { ChartsService } from '../../services/charts.service';

@Component({
  selector: 'app-donut-http',
  templateUrl: './donut-http.component.html',
  styles: [
  ]
})
export class DonutHttpComponent implements OnInit {

  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51',
      ]
    }
  ]

  constructor(private chartsService: ChartsService) { }

  ngOnInit(): void {

    // this.chartsService.getUsers()
    //   .subscribe(data => {
    //     this.doughnutChartLabels = Object.keys(data)
    //     this.doughnutChartData.push(Object.values(data))
    //   })

    this.chartsService.getUsersStructured()
      .subscribe(({ labels, values }) => {
        this.doughnutChartLabels = labels
        this.doughnutChartData.push(values)
      })
  }

}
