import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { ExternalDashboardTileComponent } from './external-dashboard-tile/external-dashboard-tile.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
   imports: [
      HttpClientModule,
      BrowserModule
   ],
   declarations: [
    ExternalDashboardTileComponent
   ],
   bootstrap: [],
   entryComponents: [
       ExternalDashboardTileComponent
   ]
})
export class AppModule { 
    constructor(private injector: Injector) {
    }

    ngDoBootstrap() {
        const externalTileCE = createCustomElement(ExternalDashboardTileComponent, { injector: this.injector });
        customElements.define('external-dashboard-tile', externalTileCE);
    }

}
