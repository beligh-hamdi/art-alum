import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[];

  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    zoom: true,
  };

  constructor() { }

  ngOnInit() {

    this.images = [
      'https://raw.githubusercontent.com/beligh-hamdi/art-alum/master/photos/01.png',
      'https://raw.githubusercontent.com/beligh-hamdi/art-alum/master/photos/02.png',
      'https://raw.githubusercontent.com/beligh-hamdi/art-alum/master/photos/03.png',
      'https://raw.githubusercontent.com/beligh-hamdi/art-alum/master/photos/04.png',
      'https://raw.githubusercontent.com/beligh-hamdi/art-alum/master/photos/05.png'
    ];
  }

}
