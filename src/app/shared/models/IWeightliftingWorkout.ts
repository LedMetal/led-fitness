import { WorkoutFocus } from '../enums';

export interface IWeightliftingWorkout {
  bodyPartFocus: WorkoutFocus;
  sets: {
    reps: number;
    weight: number;
  }[];
}
