import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';

import {MdIconRegistry} from "@angular/material";
import {DataService} from "./shared/services/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string;
  links: Array<any>= [];
  logoUrl: string;

  subscriptionService: Subscription;

  constructor(iconRegistry: MdIconRegistry,
              private dataService: DataService) {

    iconRegistry.registerFontClassAlias('fontawesome', 'fa');
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
    if (this.subscriptionService) {
      this.subscriptionService.unsubscribe();
    }
  }

}
