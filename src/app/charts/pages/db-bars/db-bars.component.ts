import { Component } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-db-bars',
  templateUrl: './db-bars.component.html',
  styles: [
  ]
})
export class DbBarsComponent {

  supplierData: ChartDataSets[] = [
    { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
    { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
  ];

  supplierLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  productData: ChartDataSets[] = [
    { data: [200, 300, 400, 300, 100], label: 'Bugas', backgroundColor: '#264653' },
  ];
}
