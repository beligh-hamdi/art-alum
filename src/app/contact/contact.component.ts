import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataService} from "../shared/services/data.service";
import {Subscription} from "rxjs/Subscription";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  contact: any;
  subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.fetchAll().subscribe(
      (data) => {
        this.contact = data.contact;
        console.log('data', data);
      }, (error) => {
        console.log('Error', error);
      },
      () => {
        //console.log('finish');
      }
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sendMesssage(){

  }

}
