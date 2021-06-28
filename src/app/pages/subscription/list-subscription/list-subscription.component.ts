import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/model/subscription';
import { SubscriptionService } from 'src/app/service/subscription.service';

@Component({
  selector: 'app-list-subscription',
  templateUrl: './list-subscription.component.html',
  styleUrls: ['./list-subscription.component.css'],
})
export class ListSubscriptionComponent implements OnInit {
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.loadDataSubscriptions();
  }

  loadDataSubscriptions() {
    this.subscriptionService
      .getSubscriptionList()
      .subscribe((subscriptions) => (this.subscriptions = subscriptions));
  }

  deleteSubscription(subscription: Subscription) {
    this.subscriptionService.deleteSubscription(subscription.id).subscribe((data) => {
      this.loadDataSubscriptions();
    });
  }

  updateSubscription(subscription: Subscription) {
    this.router.navigate(['UpdateSubscription', subscription.id]);
  }
}