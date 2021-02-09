import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-newsletter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <fieldset class="newsletter" *ngIf="user$ | async as user">
      <legend>Newsletter</legend>

      <h5>Hello {{ user.firstName }}, enter your email below to subscribe:</h5>
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
  @Input() user$?: Observable<User>;

  @Output() subscribe = new EventEmitter<string>();

  subscribeToNewsletter(email: string): void {
    this.subscribe.emit(email);
  }
}
