import { Component, OnInit } from '@angular/core';

import 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent implements OnInit {

  ngOnInit() {
    this.loadImages();
  }

  images: string[];
  config: any = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 30,
    zoom: true,
  };

  loadImages() {
    this.images = [
      'https://lh3.googleusercontent.com/mggWpYZn5JIivcg3IIFWdOW64k0xjxVmAeZ4GrfpXLBNOEvuYLjuA2wgblXQ-6QqXuiEH_-msZqUrHA=w2880-h1498-rw',
      'https://lh4.googleusercontent.com/o21K2fKfWVllfGK4SQCSqWo1rX9igsGR4XBDgWek2PRe3mqfqboIP0wDafjiUqpfGTuql8M7HzwhtOk=w2880-h1498-rw',
      'assets/img/logo.png'
    ];
  }

}
