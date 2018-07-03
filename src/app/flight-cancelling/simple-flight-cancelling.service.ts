import { Injectable } from '@angular/core';

@Injectable()
export class SimpleFlightCancellingService  {

    show(flightId: number): void {
        const flightCancelling = document.createElement('flight-cancelling');
        flightCancelling['flightId'] = flightId;

        flightCancelling.addEventListener('closed', () => document.body.removeChild(flightCancelling));
        

        document.body.appendChild(flightCancelling);

    }

   
}
