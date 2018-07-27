import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardTileComponent } from './dashboard-tile/dashboard-tile.component';
import { createCustomElement } from '@angular/elements';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    NgxChartsModule
  ],
  declarations: [
    DashboardComponent,
    DashboardTileComponent
  ],
  exports: [
    DashboardComponent
  ],
  entryComponents: [
    DashboardTileComponent
  ]
})
export class DashboardModule { 

  constructor(private injector: Injector) {

    const tileCE = createCustomElement(DashboardTileComponent, 
                                      { injector: this.injector });
    
    customElements.define('dashboard-tile', tileCE);

  }

}
