import { Component, OnInit, Input, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DashboardTileComponent implements OnInit {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

  data: object = {};

  constructor(private elm: ElementRef) {
  }

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
  
  slotChange($event) {
    const assigned = $event.target.assignedNodes();
    if (assigned.length > 0) {
      console.debug('shotchange', assigned[0]);
    }
  }
}
