import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MdIconModule, MdButtonModule, MdMenuModule } from '@angular/material';

import {TranslateService} from '@ngx-translate/core';


import { ToggleLanguageComponent } from './toggle-language/toggle-language.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    MdIconModule, MdButtonModule, MdMenuModule,
    TranslateModule.forRoot({
      loader: { provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [Http]}
    })
  ],
  exports: [
    TranslateModule,
    ToggleLanguageComponent
  ],
  declarations: [ToggleLanguageComponent]
})
export class I18nModule {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('fr');
    translate.use('fr');
  }
}
