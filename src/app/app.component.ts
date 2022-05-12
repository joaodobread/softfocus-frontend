import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'open-layers-test';

  ngOnInit(): void {
    const map = Leaflet.map('map', {
      center: [43, 19],
      zoom: 4,
      scrollWheelZoom: false,
      zoomControl: false,
      touchZoom: false,
      dragging: false,
    });

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    Leaflet.marker([43, 19]).addTo(map);
  }
}
