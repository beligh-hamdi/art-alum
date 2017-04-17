import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number = 37.2642517;
  lng: number = 9.8796146;

  lat1: number = 36.8793893;
  lng1: number = 10.1855471;

  zoom: number = 8;

  constructor() { }

  ngOnInit() {
  }

}
