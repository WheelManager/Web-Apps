import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-find-subscription',
  templateUrl: './find-subscription.component.html',
  styleUrls: ['./find-subscription.component.css'],
})
export class FindSubscriptionComponent implements OnInit {
  id: number = 0;
  subscriptionDescription: string = '';
  subscriptionStartDate: Date = new Date();
  subscriptionPrice: number = 0;
  subscription: Subscription = new Subscription();
  subscriptions: Subscription[] = [];
  

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {}

  searchSubscriptionById() {
    this.subscriptionService.getSubscriptionById(this.id).subscribe((subscription) => {
      console.log(subscription);
      this.subscription = subscription;
    });
  }

  searchSubscriptionByDescription() {
    this.subscriptionService
      .getSubscriptionByDescritpion(this.subscriptionDescription)
      .subscribe((subscriptions) => {
        console.log(subscriptions);
        this.subscriptions = subscriptions;
      });
  }

  searchSubscriptionBystartDate() {
    this.subscriptionService
      .getSubscriptionByStartdate(this.subscriptionStartDate)
      .subscribe((subscriptions) => {
        console.log(subscriptions);
        this.subscriptions = subscriptions;
      });
  }

  searchSubscriptionByPrice() {
    this.subscriptionService
      .getSubscriptionByPrice(this.subscriptionPrice)
      .subscribe((subscriptions) => {
        console.log(subscriptions);
        this.subscriptions = subscriptions;
      });
  }
}