import { inject, Injectable } from '@angular/core';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  docData,
  DocumentReference,
  Firestore,
  Timestamp,
} from '@angular/fire/firestore';
import { combineLatest, map, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { IUserData } from '../shared/models/IUserData';
import { IWorkoutData } from '../shared/models/IWorkoutData';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore = inject(Firestore);
  authService = inject(AuthService);

  GetUserAndWorkoutsData(): Observable<[IUserData, IWorkoutData[]]> {
    const user = this.authService.currentUser();
    const userRef = doc(
      this.firestore,
      `users/${user!.uid}`
    ) as DocumentReference<IUserData>;
    const workoutsRef = collection(
      this.firestore,
      `users/${user!.uid}/workouts`
    ) as CollectionReference<IWorkoutData>;

    return combineLatest([
      docData(userRef, { idField: 'id' }),
      collectionData(workoutsRef, { idField: 'id' }),
    ]) as Observable<[IUserData, IWorkoutData[]]>;
  }
}
