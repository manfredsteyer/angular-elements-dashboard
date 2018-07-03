/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightService } from './flight.service';

describe('Service: Flight', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightService]
    });
  });

  it('should ...', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
});
