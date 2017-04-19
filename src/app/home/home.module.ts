import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { MdIconModule, MdListModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,

    FlexLayoutModule,
    MdIconModule, MdListModule, MdCardModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
