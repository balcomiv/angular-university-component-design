import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { NewsletterService } from '../services/newsletter.service';

@Component({
  selector: 'app-home',
  template: `
    <app-newsletter
      [user]="user"
      (subscribe)="subscribe($event)"
    ></app-newsletter>
    <br />
    <button (click)="changeUserName()">Change User Name to Bob</button>
    <br />
    <pre>{{ user | json }}</pre>
  `,
  styles: [],
})
export class HomeComponent {
  user: User = {
    firstName: 'Alice',
    lastName: 'Smith',
  };

  constructor(private newsletterService: NewsletterService) {}

  subscribe(email: string): void {
    this.newsletterService.subscribe(email);
  }

  changeUserName(): void {
    this.user.firstName = 'Bob';
  }
}
