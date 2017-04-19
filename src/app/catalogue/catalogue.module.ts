import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';

import { MdIconModule, MdListModule, MdCardModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { CatalogueComponent } from './catalogue.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule,

    FlexLayoutModule,
    LazyLoadImageModule,
    MdIconModule, MdListModule, MdCardModule
  ],
  declarations: [
    CatalogueComponent
  ]
})
export class CatalogueModule { }
