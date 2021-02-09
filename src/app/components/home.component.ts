import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { NewsletterService } from '../services/newsletter.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  template: `
    <app-newsletter
      [user$]="user$"
      (subscribe)="subscribe($event)"
    ></app-newsletter>
    <br />
    <button (click)="changeUserName()">Change User Name to Bob</button>
    <br />
    <!-- <pre>{{ user | json }}</pre> -->
  `,
  styles: [],
})
export class HomeComponent {
  user$: Observable<User>;

  constructor(
    private newsletterService: NewsletterService,
    private userService: UserService
  ) {
    this.user$ = userService.user$;
  }

  subscribe(email: string): void {
    this.newsletterService.subscribe(email);
  }

  changeUserName(): void {
    //  Change user in an immutable way so 'onPush' will fire when input ref changes
    this.userService.loadUser({ firstName: 'Bob', lastName: 'Smith' });
  }
}
