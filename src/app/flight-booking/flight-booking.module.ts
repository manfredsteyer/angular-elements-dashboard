import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { RouterModule } from '@angular/router';
import { FlightService } from './flight.service';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, // [(ngModel)]="..."
        SharedModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
,
    PassengerSearchComponent
,
    FlightEditComponent
],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    providers: [
        FlightService
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {

}