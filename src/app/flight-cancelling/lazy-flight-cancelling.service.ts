import { Injectable, Injector, NgModuleFactoryLoader, NgModuleRef, NgModuleFactory } from '@angular/core';
import { SimpleFlightCancellingService } from './simple-flight-cancelling.service';

@Injectable()
export class LazyFlightCancellingService extends SimpleFlightCancellingService {

    constructor(
        private loader: NgModuleFactoryLoader,
        private injector: Injector
    ) {
            super();
    }

    private moduleRef: NgModuleRef<any>;

    show(flightId: number): void {
        
        if (this.moduleRef) {
            super.show(flightId);
            return
        }

        const path = 'src/app/flight-cancelling/flight-cancelling.module#FlightCancellingModule'
        this
            .loader
            .load(path)
            .then(moduleFactory => {
                this.moduleRef = moduleFactory.create(this.injector).instance;
                console.debug('moduleRef', this.moduleRef);
                super.show(flightId);
            })
            .catch(err => {
                console.error('error loading module', err); 
            });
        
    }


}
 