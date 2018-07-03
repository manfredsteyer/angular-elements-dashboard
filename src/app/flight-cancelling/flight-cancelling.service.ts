import { AppModule } from './../app.module';
import { Injectable, NgModuleFactoryLoader, Injector } from '@angular/core';
import { LazyFlightCancellingService } from './lazy-flight-cancelling.service';
import { SimpleFlightCancellingService } from './simple-flight-cancelling.service';

@Injectable({
    providedIn: 'root',
    useClass: LazyFlightCancellingService,
    deps: [NgModuleFactoryLoader, Injector]
})
export class FlightCancellingService {

    show(flightId: number): void { }
    close(): void { }

}
