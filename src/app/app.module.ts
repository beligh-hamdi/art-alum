import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdToolbarModule,
  MdSidenavModule,
  MdIconModule,
  MdListModule,
  MdCardModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import {TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LocationComponent } from './location/location.component';
import { DataService } from './shared/services/data.service';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CatalogueComponent,
    NavbarComponent,
    SidebarComponent,
    GalleryComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule, MdCheckboxModule, MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdCardModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateHttpLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
