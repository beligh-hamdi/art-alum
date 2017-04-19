import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MediaChange, ObservableMedia} from "@angular/flex-layout";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {

  @Input() title;
  @Input() logoUrl;
  @Input() links;

  isLargeScreen: boolean= true;
  activeMediaQuery= '';
  mediaQuery= '';


  subscriptionMedia: Subscription;

  constructor(media: ObservableMedia) {

    this.subscriptionMedia = media.subscribe((change: MediaChange) => {
      this.activeMediaQuery = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : "";
      this.loadContent(change.mqAlias); // change.mqAlias: lg md sm xs
    });
  }

  ngOnInit() {
  }

  checkScreenType(){
    if(this.mediaQuery === 'sm' || this.mediaQuery === 'xs') return 'over';
    if(this.mediaQuery === 'md' || this.mediaQuery === 'lg') return 'side';
  }

  loadContent(media) {
    this.mediaQuery = media;
    media === 'sm' || media === 'xs' ? this.isLargeScreen = false : this.isLargeScreen = true;
  }

  ngOnDestroy() {
    if (this.subscriptionMedia) {
      this.subscriptionMedia.unsubscribe();
    }
  }

}
