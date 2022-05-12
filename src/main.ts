import * as Leaflet from 'leaflet';
Leaflet.Marker.prototype.options.icon = new Leaflet.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet.draw/1.0.4/images/marker-shadow.png',
});

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
