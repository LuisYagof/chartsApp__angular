import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { DbBarsComponent } from './pages/db-bars/db-bars.component';
import { DonutComponent } from './pages/donut/donut.component';
import { DonutHttpComponent } from './pages/donut-http/donut-http.component';

const routes: Routes = [
  { path: 'bars', component: BarsComponent },
  { path: 'double-bars', component: DbBarsComponent },
  { path: 'donut', component: DonutComponent },
  { path: 'donut-http', component: DonutHttpComponent },
  { path: '**', redirectTo: 'bars' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
