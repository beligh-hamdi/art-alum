import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';

import { MdIconModule, MdListModule, MdCardModule } from '@angular/material';
import { SwiperModule } from 'angular2-useful-swiper';

import { GalleryComponent } from './gallery.component';

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,

    SwiperModule,

    MdIconModule, MdListModule, MdCardModule
  ],
  declarations: [
    GalleryComponent
  ]
})
export class GalleryModule { }
