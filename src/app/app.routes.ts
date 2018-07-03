import { HomeComponent } from './home/home.component';
import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'flight-booking',
        loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];