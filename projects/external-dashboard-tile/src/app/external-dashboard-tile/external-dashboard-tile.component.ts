import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'app-external-dashboard-tile',
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css']
})
export class ExternalDashboardTileComponent implements OnInit {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  data: object = {};

  constructor() { }

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


