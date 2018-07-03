import { Flight } from './../../entities/flight';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { }

  select() {
    // this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    // this.selected = false;
    this.selectedChange.next(false);
  }

  ngOnInit() {
  }

}
