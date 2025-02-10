import { Timestamp } from '@angular/fire/firestore';

export interface IUserData {
  id: string;
  birthday: Timestamp | Date;
  email: string;
  username: string;
}
