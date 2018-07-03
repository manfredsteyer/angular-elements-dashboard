import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalDashboardTileService {

  constructor() { }

  load(): void {
    const script = document.createElement('script');
    script.src = 'assets/external-dashboard-tile.bundle.js';
    document.body.appendChild(script);
  }

}
