import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';

import {MediaChange, ObservableMedia} from "@angular/flex-layout";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Art Alum';
  links = [
    {path: '/home', label: 'Accueil', icon:'home'},
    {path: '/catalogue', label: 'Catalogue', icon:'photo_library'},
    {path: '/about', label: 'A propos', icon:'description'},
    {path: '/contact', label: 'Contact', icon:'contacts'}
  ];
  isMobile: boolean = true;
  watcher: Subscription;
  activeMediaQuery = "";
  mediaQuery= '';

  constructor(media: ObservableMedia) {
    this.watcher = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      this.loadContent(change.mqAlias);
      // change.mqAlias: lg md sm xs
    });
  }

  loadContent(media) {
    this.mediaQuery = media;
    media === 'sm' || media === 'xs' ? this.isMobile = false : this.isMobile = true;
  }

  checkType(){
    if(this.mediaQuery === 'sm' || this.mediaQuery === 'xs') return 'over';
    if(this.mediaQuery === 'md' || this.mediaQuery === 'lg') return 'side';
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.watcher.unsubscribe();
  }

}
