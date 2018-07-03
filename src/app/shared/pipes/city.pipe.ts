import { FlightService } from './../../flight-booking/flight.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {


  transform(value: string, fmt: string, lang: string): string {
    
    let short, long;

    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
      break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
      break;
      case 'Frankfurt':
        short = 'FRA';
        long = 'Airport Frankfurt';
      break;
      default:
        short = long = value;
    }


    let date = new Date();
    if (fmt == 'long') return long;
    return short;

  }

}
