import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/user';

const ANONYMOUS_USER: User = {
  firstName: '',
  lastName: '',
};

/**
 * This is a global singleton service because we will add it to our root application module
 */
@Injectable({
  providedIn: 'root',
})
export class UserService {
  /**
   * By not exposing the subject, the UserService controls the ability to emit
   * new user objects to other parts of the application
   */
  private subject = new BehaviorSubject<User>(ANONYMOUS_USER);

  /**
   * the observable is derived from a private subject instance using asObservable
   *
   * The user data is available via a publicly available observable named user$, to which other
   * parts of the application can subscribe to
   */
  user$: Observable<User> = this.subject.asObservable();

  /**
   * Normally would for example call the backend and load the data from
   * there, but in this case and for demonstration purposes, we will simply
   * emit a new user directly
   *
   */
  loadUser(user: User): void {
    this.subject.next(user);
  }
}
