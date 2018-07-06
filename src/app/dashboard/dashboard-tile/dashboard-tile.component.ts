import { Component, OnInit, Input } from '@angular/core';

@Component({
  // selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.css']
})
export class DashboardTileComponent  {
  @Input() a: number;
  @Input() b: number;
  @Input() c: number;
}
