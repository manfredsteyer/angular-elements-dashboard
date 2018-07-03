import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Routes } from '@angular/router';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    {
        // flight-booking/flight-search
        path: 'flight-search',
        component: FlightSearchComponent
    },
    {
        path: 'passenger-search',
        component: PassengerSearchComponent
    },
    {
        path: 'flight-edit/:id',
        component: FlightEditComponent
    }
];