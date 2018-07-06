import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalDashboardTileService {

  constructor() { }

  loaded = false;

  load(): void {
    if (this.loaded) return;
    const script = document.createElement('script');
    script.src = 'assets/external-dashboard-tile.bundle.js';
    document.body.appendChild(script);
    this.loaded = true;
  }

}
