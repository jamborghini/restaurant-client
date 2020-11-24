import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  map: L.Map;
  @Input() lat: number;
  @Input() long: number;
  @Input() bindMessage: string;

  constructor() {
  }

  ngOnInit(): void {

    this.map = L.map('map', {
      center: [this.lat, this.long],
      zoom: 15,
      renderer: L.canvas(),
    });

    L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
      maxZoom: 20,
    }).addTo(this.map);

    const marker = L.marker([this.lat, this.long]).addTo(this.map);

    marker.bindPopup(`<i>${this.bindMessage}</i>`).openPopup();

  }

}
