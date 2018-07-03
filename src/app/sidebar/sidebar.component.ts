import { LazyFlightCancellingService } from './../flight-cancelling/lazy-flight-cancelling.service';
import { Component, OnInit, SystemJsNgModuleLoader, Compiler, NgModuleFactoryLoader, Injector } from '@angular/core';
import { FlightCancellingService } from '../flight-cancelling/flight-cancelling.service';

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {
    constructor(private service: FlightCancellingService) {
    }

    showDialog(): void {
        this.service.show(4712);
    }

}
