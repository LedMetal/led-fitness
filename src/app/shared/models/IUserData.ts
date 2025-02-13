import { Timestamp } from '@angular/fire/firestore';

export interface IUserData {
  id: string;
  createdOn: Timestamp | Date;
}
