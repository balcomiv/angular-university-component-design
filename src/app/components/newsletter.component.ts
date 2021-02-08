import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-newsletter',
  template: `
    <fieldset class="newsletter">
      <legend>Newsletter</legend>

      <h5>Hello {{ user?.firstName }}, enter your email below to subscribe:</h5>
      <form>
        <input
          #email
          type="email"
          name="email"
          placeholder="Enter your Email"
        />

        <input
          type="button"
          class="button button-primary"
          value="Subscribe"
          (click)="subscribeToNewsletter(email.value)"
        />
      </form>
    </fieldset>
  `,
  styles: [],
})
export class NewsletterComponent {
  @Input() user?: User;

  @Output()
  subscribe = new EventEmitter<string>();

  subscribeToNewsletter(email: string): void {
    this.subscribe.emit(email);
  }
}
