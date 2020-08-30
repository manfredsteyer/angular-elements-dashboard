import { Component, OnInit } from '@angular/core';
import { ExternalDashboardTileService } from './external-dashboard-tile.service';
import { LazyDashboardTileService } from './lazy-dashboard-tile.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private lazyService: LazyDashboardTileService,
    private externalService: ExternalDashboardTileService
  ) { }

  ngOnInit() {
    this.addLazy('dashboard-chart');
    this.addLazy('lazy-dashboard-tile');
  }

  getData(): [number, number, number] {
    return [
      Math.round(Math.random() * 200),
      Math.round(Math.random() * 100),
      Math.round(Math.random() * 100)
    ];
  }

  addDefault(): void {
    this.add('dashboard-tile');
  }

  addLazy(name): void {
    this.lazyService.load(name).then(_ => {
      this.add(name);
    });
  }

  addExternal(): void {
    this.externalService.load();
    this.add('external-dashboard-tile');
  }

  add(tileKind: string): void {

    const data = this.getData();

    const tile = document.createElement(tileKind);
    tile.setAttribute('class', 'col-lg-4 col-md-3 col-sm-2');
    tile.setAttribute('a', '' + data[0]);
    tile.setAttribute('b', '' + data[1]);
    tile.setAttribute('c', '' + data[2]);

    const content = document.getElementById('content');
    content.appendChild(tile);

  }

}
