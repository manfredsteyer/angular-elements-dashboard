import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FlightCancellingService } from './flight-cancelling.service';
import { LazyFlightCancellingService } from './lazy-flight-cancelling.service';

@Component({
  selector: 'flight-cancelling',
  templateUrl: './flight-cancelling.component.html',
  styleUrls: ['./flight-cancelling.component.css']
})
export class FlightCancellingComponent implements OnInit {

  @Input() id: number;
  @Output() closed = new EventEmitter();

  constructor(private service: FlightCancellingService) { }

  ngOnInit() {
    console.debug('init');
  }

  closeHandler(): void {
    console.debug('remove');
    this.closed.next();
  }

}
