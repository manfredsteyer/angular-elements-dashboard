import { NgModule, Injector, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightCancellingComponent } from './flight-cancelling.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
  ],
  declarations: [FlightCancellingComponent],
  entryComponents: [FlightCancellingComponent]
})
export class FlightCancellingModule { 
  
  constructor(injector: Injector) {
    console.debug('FlightCancellingModule initialized ...');

    const ngElementConstructor = createCustomElement(FlightCancellingComponent, {
      injector
    });

    
    customElements.define('flight-cancelling', ngElementConstructor);
  }
  
}
