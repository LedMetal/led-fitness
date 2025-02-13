import { Timestamp } from '@angular/fire/firestore';
import {
  BackExercise,
  BicepsExercise,
  CardioExercise,
  ChestExercise,
  LegsExercise,
  ShouldersExercise,
  TricipsExercise,
  WorkoutType,
} from '../enums';
import { ICardioWorkout } from './ICardioWorkout';
import { IWeightliftingWorkout } from './IWeightliftingWorkout';

export interface IWorkoutData {
  id?: string;
  date: Timestamp | Date;
  type: WorkoutType;
  exercise:
    | CardioExercise
    | BackExercise
    | BicepsExercise
    | ChestExercise
    | LegsExercise
    | ShouldersExercise
    | TricipsExercise;
  cardioWorkout?: ICardioWorkout;
  weightliftingWorkout?: IWeightliftingWorkout;
}
