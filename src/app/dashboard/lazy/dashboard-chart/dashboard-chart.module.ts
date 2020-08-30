import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardChartComponent } from './dashboard-chart.component';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardChartComponent
  ],
  entryComponents: [
    DashboardChartComponent
  ]
})
export class DashboardChartModule {

  constructor(private injector: Injector) {
    const lazyCE = createCustomElement(DashboardChartComponent, { injector: this.injector });
    customElements.define('dashboard-chart', lazyCE);
  }

}
