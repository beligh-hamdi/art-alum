import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {MdIconRegistry} from "@angular/material";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-toggle-language',
  templateUrl: './toggle-language.component.html',
  styleUrls: ['./toggle-language.component.css']
})
export class ToggleLanguageComponent implements OnInit {

  currentLang: string;

  constructor(
    private translate: TranslateService,
    iconRegistry: MdIconRegistry,
    sanitizer: DomSanitizer) {

    iconRegistry.addSvgIcon('flag-fr', sanitizer.bypassSecurityTrustResourceUrl('assets/i18n/flags/fr.svg'));
    iconRegistry.addSvgIcon('flag-gb', sanitizer.bypassSecurityTrustResourceUrl('assets/i18n/flags/gb.svg'));
    iconRegistry.addSvgIcon('flag-us', sanitizer.bypassSecurityTrustResourceUrl('assets/i18n/flags/us.svg'));
    iconRegistry.addSvgIcon('flag-ar', sanitizer.bypassSecurityTrustResourceUrl('assets/i18n/flags/ar.svg'));
    iconRegistry.addSvgIcon('flag-it', sanitizer.bypassSecurityTrustResourceUrl('assets/i18n/flags/it.svg'));

    this.currentLang = translate.currentLang;

  }

  ngOnInit() {}

  changeLng(lng) {
    this.translate.use(lng);
    this.currentLang = this.translate.currentLang;
  }

}
