import { enableProdMode } from '@angular/core';
//basic browser features- what browser vendor
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//Testing wether this app is in production or dev mode : ng serve -dev mode
if (environment.production) {
  enableProdMode();
}

//boot your into browser -----> AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
