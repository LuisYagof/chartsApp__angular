import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule as NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DbBarsComponent } from './pages/db-bars/db-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';


@NgModule({
  declarations: [
    BarsComponent,
    DbBarsComponent,
    DonutComponent,
    BarChartComponent,
    DonutHttpComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
