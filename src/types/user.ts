import { DateTime } from 'luxon';

export interface IUser {
  email: string;
  displayName: string;
  uid: string;
  stars: number;
  ranking: string;
  rankingPoints: number;
  createdAt: DateTime;
  updatedAt: DateTime | null;
  deletedAt: DateTime | null;
}
