import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ContactRoutingModule } from './contact-routing.module';

import { MdButtonModule, MdIconModule, MdListModule, MdCardModule, MdInputModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgmCoreModule } from 'angular2-google-maps/core';

import { ContactComponent } from './contact.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBw30Me8aUMBCG4JcwQHcrG9wHezRZFkN8'
    }),
    MdButtonModule, MdIconModule, MdListModule, MdCardModule, MdInputModule,
    FlexLayoutModule,
  ],
  declarations: [
    ContactComponent,
    MapComponent
  ]
})
export class ContactModule { }
