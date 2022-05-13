import { Component, Input, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements OnInit {
  @Input()
  latitude!: number;

  @Input()
  longitude!: number;

  map!: Leaflet.Map;

  constructor() {}

  ngOnInit(): void {
    this.map = Leaflet.map('map', {
      center: [this.latitude, this.longitude],
      zoom: 11,
      scrollWheelZoom: false,
      zoomControl: false,
      touchZoom: false,
      dragging: false,
    });
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    Leaflet.marker([this.latitude, this.longitude]).addTo(this.map);
    Leaflet.circle([this.latitude, this.longitude], { radius: 10000 }).addTo(
      this.map
    );
  }
}
