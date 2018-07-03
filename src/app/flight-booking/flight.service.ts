import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from '../entities/flight';

@Injectable()
export class FlightService {

    constructor(private http: HttpClient) { }

    flights: Flight[] = [];

    load(from: string, to: string): void {
        this.find(from, to).subscribe(
            flights => { this.flights = flights; },
            err => {console.error('Error loading flights', err); }
        );
    }

    find(from: string, to: string): Observable<Flight[]> {
        let url = 'http://www.angular.at/api/flight';
        let params = new HttpParams().set('from', from).set('to', to);
        let headers = new HttpHeaders().set('Accept', 'application/json');
    
        return this.http.get<Flight[]>(url, {params, headers});
    }
}
