import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';

import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {MdIconRegistry} from "@angular/material";
import {DataService} from "./shared/services/data.service";

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  links: Array<any>= [];
  isLargeScreen: boolean= true;
  logoUrl: string;

  activeMediaQuery= '';
  mediaQuery= '';

  subscriptionMedia: Subscription;
  subscriptionService: Subscription;

  constructor(media: ObservableMedia,
              iconRegistry: MdIconRegistry,
              private dataService: DataService,
              private translate: TranslateService
  ) {

    this.subscriptionMedia = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      this.loadContent(change.mqAlias); // change.mqAlias: lg md sm xs
    });

    iconRegistry.registerFontClassAlias('fontawesome', 'fa');

    translate.setDefaultLang('fr');
    translate.use('fr');
  }


  loadContent(media) {
    this.mediaQuery = media;
    media === 'sm' || media === 'xs' ? this.isLargeScreen = false : this.isLargeScreen = true;
  }

  checkScreenType(){
    if(this.mediaQuery === 'sm' || this.mediaQuery === 'xs') return 'over';
    if(this.mediaQuery === 'md' || this.mediaQuery === 'lg') return 'side';
  }

  ngOnInit() {
    this.subscriptionService = this.dataService.fetchAll().subscribe(
      (data) => {
        this.title = data.configuration.title;
        this.logoUrl = data.configuration.logoUrl;
        this.links = data.links;

      }, (error) => {
        console.log('Error', error);
      },
      () => {
        //console.log('finish');
      }
    );
  }

  ngOnDestroy() {
    if (this.subscriptionMedia) {
      this.subscriptionMedia.unsubscribe();
    }
    if (this.subscriptionService) {
      this.subscriptionService.unsubscribe();
    }
  }

}
