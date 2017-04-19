import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  defaultImage = 'assets/img/loading.gif';
  offset = 100;

  constructor() { }

  ngOnInit() {
  }

}
