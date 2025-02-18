import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { IUserData, IWorkoutData } from '../shared/models';
import { AuthService } from '../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Platform } from '@angular/cdk/platform';
import { debounceTime, fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  firestoreService = inject(FirestoreService);
  authService = inject(AuthService);
  platform = inject(Platform);

  noWorkoutData: boolean = false;
  isMobile: boolean = false;
  resizeSubscription!: Subscription;

  ngOnInit(): void {
    this.resizeSubscription = fromEvent(window, 'resize')
      .pipe(debounceTime(300))
      .subscribe(() => {
        this.checkIfMobile();
      });

    this.firestoreService
      .getUserAndWorkoutsData()
      .subscribe((data: [IUserData, IWorkoutData[]]) => {
        console.log('getUserAndWorkoutsData data:', data);

        this.noWorkoutData = data[1].length === 0;
      });
  }

  ngOnDestroy(): void {
    this.resizeSubscription.unsubscribe();
  }

  /**
   * Check if the current platform is either an IOS or Android device.
   * This will also return true if the window width is less than 768px.
   */
  checkIfMobile(): void {
    this.isMobile =
      this.platform.IOS || this.platform.ANDROID || window.innerWidth < 768;
  }
}
