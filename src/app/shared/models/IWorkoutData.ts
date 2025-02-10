import { Timestamp } from '@angular/fire/firestore';

export interface IWorkoutData {
  id: string;
  date: Timestamp | Date;
  exercise: string;
  type: string;
}
