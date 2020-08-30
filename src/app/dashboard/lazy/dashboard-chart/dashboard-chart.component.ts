import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.css']
})
export class DashboardChartComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  data: object = {};

  ngOnInit() {
    this.data = [
      {
        name: 'a',
        value: this.a
      },
      {
        name: 'b',
        value: this.b
      },
      {
        name: 'c',
        value: this.c
      }
    ];
  }
}
