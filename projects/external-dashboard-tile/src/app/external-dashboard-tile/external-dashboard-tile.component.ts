import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-external-dashboard-tile',
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css']
})
export class ExternalDashboardTileComponent {

  constructor(private http: HttpClient) {
  }

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  more() {
    this.http.get('/assets/stats.json').subscribe(
      data => {
        this.a = data['a'];
        this.b = data['b'];
        this.c = data['c'];
      }
    );
  }

}


