import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lazy-dashboard-tile',
  templateUrl: './lazy-dashboard-tile.component.html',
  styleUrls: ['./lazy-dashboard-tile.component.css']
})
export class LazyDashboardTileComponent implements OnInit {
  
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

