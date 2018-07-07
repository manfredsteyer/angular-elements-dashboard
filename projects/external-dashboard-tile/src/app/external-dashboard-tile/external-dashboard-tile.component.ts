import { Component, Input } from '@angular/core';

@Component({
  // selector: 'app-external-dashboard-tile',
  templateUrl: './external-dashboard-tile.component.html',
  styleUrls: ['./external-dashboard-tile.component.css']
})
export class ExternalDashboardTileComponent {

  @Input() a: number;
  @Input() b: number;
  @Input() c: number;

}


