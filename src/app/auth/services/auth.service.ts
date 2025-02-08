import { inject, Injectable, signal } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  user,
  UserCredential,
} from '@angular/fire/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  firebaseAuth = inject(Auth);

  user$ = user(this.firebaseAuth);
  currentUser = signal<{ email: string; username: string } | null>(null);

  /**
   * Create a new user with the specified email and password, then set user's displayName
   *
   * @param email Account email address
   * @param username Account username
   * @param password Account password
   * @returns Observable<void>
   */
  signUp(email: string, username: string, password: string): Observable<void> {
    const promise = createUserWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then((user: UserCredential) =>
      updateProfile(user.user, { displayName: username })
    );

    return from(promise);
  }

  /**
   * Sign into user with the specified email and password
   *
   * @param email Credentials email address
   * @param password Credentials password
   * @returns Observable<void>
   */
  login(email: string, password: string): Observable<void> {
    const promise = signInWithEmailAndPassword(
      this.firebaseAuth,
      email,
      password
    ).then(() => {});

    return from(promise);
  }

  /**
   * Sign out of current user
   *
   * @returns Observable<void>
   */
  logout(): Observable<void> {
    const promise = signOut(this.firebaseAuth);

    return from(promise);
  }
}
