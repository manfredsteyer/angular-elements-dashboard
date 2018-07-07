import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css']
})
export class DashboardTileComponent implements OnInit {
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
