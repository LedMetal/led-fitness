import { inject, Injectable } from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  deleteDoc,
  doc,
  docData,
  DocumentReference,
  Firestore,
  getDoc,
  setDoc,
} from '@angular/fire/firestore';
import { combineLatest, from, Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { IUserData, IWorkoutData } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  firestore = inject(Firestore);
  authService = inject(AuthService);

  /**
   * Retreive user document and associated workout collection data
   *
   * @returns Observable<[IUserData, IWorkoutData[]]>
   */
  getUserAndWorkoutsData(): Observable<[IUserData, IWorkoutData[]]> {
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

  /**
   * Create a new user document, if it doesn't already exist
   *
   * @param userData IUserData object to store as user document
   * @returns Observable<void>
   */
  addUserDocument(userData: IUserData): Observable<void> {
    const user = this.authService.currentUser();
    const userRef = doc(this.firestore, `users/${user!.uid}`);

    const promise = getDoc(userRef).then((doc) => {
      if (!doc.exists()) {
        setDoc(userRef, userData);
      }
    });

    return from(promise);
  }

  /**
   * Create a new workout document for user
   *
   * @param workoutData IWorkoutData object to store as workout document
   * @returns Observable<void>
   */
  addWorkout(workoutData: IWorkoutData): Observable<void> {
    const user = this.authService.currentUser();
    const workoutsRef = collection(
      this.firestore,
      `users/${user!.uid}/workouts`
    );
    const promise = addDoc(workoutsRef, workoutData).then(() => {});

    return from(promise);
  }

  /**
   * Deletes a workout document belonging to user
   *
   * @param workoutId index of workout to delete
   * @returns Observable<void>
   */
  deleteWorkout(workoutId: string): Observable<void> {
    const user = this.authService.currentUser();
    const workoutRef = doc(
      this.firestore,
      `users/${user!.uid}/workouts/${workoutId}`
    );
    const promise = deleteDoc(workoutRef);

    return from(promise);
  }
}
