import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule}  from '@angular/platform-browser/animations';

import { MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdButtonModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { I18nModule } from './shared/i18n/i18n.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

import { DataService } from './shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    I18nModule,

    MdToolbarModule, MdSidenavModule, MdIconModule, MdListModule, MdButtonModule,

    AppRoutingModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
