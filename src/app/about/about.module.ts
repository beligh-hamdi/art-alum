import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';

import { AboutComponent } from './about.component';

import { MdIconModule, MdListModule, MdCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,

    MdIconModule, MdListModule, MdCardModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
