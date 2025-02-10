import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FirestoreService } from '../services/firestore.service';
import { IUserData, IWorkoutData } from '../shared/models';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  firestoreService = inject(FirestoreService);

  ngOnInit(): void {
    this.firestoreService
      .GetUserAndWorkoutsData()
      .subscribe((data: [IUserData, IWorkoutData[]]) =>
        console.log('data:', data)
      );
  }
}
