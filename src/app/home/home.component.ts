import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { IUserData, IWorkoutData } from '../shared/models';
import { AuthService } from '../auth/services/auth.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  firestoreService = inject(FirestoreService);
  authService = inject(AuthService);

  noWorkoutData: boolean = false;

  ngOnInit(): void {
    this.firestoreService
      .getUserAndWorkoutsData()
      .subscribe((data: [IUserData, IWorkoutData[]]) => {
        console.log('getUserAndWorkoutsData data:', data);

        this.noWorkoutData = data[1].length === 0;
      });
  }
}
