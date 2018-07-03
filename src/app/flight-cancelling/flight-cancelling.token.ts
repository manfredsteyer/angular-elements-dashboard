import { FlightCancellingService } from './flight-cancelling.service';
import { FlightService } from './../flight-booking/flight.service';
import { InjectionToken, NgModuleFactoryLoader, inject, Injector } from "@angular/core";
import { SimpleFlightCancellingService } from "./simple-flight-cancelling.service";
import { LazyFlightCancellingService } from "./lazy-flight-cancelling.service";

export const FLIGHT_CANCELLING_SERVICE = 
        new InjectionToken('FLIGHT_CANCELLING_SERVICE', {
            providedIn: 'root',
            factory: () => new LazyFlightCancellingService(null, null)
        });

        let x = inject(FlightCancellingService);

        inject