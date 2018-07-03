import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { ɵrenderComponent as renderComponent } from '@angular/core';
import { AppComponent } from './app/app.component';


if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule);

// renderComponent(AppComponent)
/*
  // "angularCompilerOptions": {
  //   "enableIvy": true
  // }
  
*/