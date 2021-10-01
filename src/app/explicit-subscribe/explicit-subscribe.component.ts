import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-explicit-subscribe',
  templateUrl: './explicit-subscribe.component.html',
  styleUrls: ['./explicit-subscribe.component.css'],
})
export class ExplicitSubscribeComponent implements OnInit {
  value: any;
  private subscription: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscription = this.dataService.valueChanges.subscribe((value) => {
      this.value = value;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
