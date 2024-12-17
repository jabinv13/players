export type UserStatus = 'Active' | 'Retired';

// export interface User {
//   id: string;
//   name: string;
//   age: number;
//   leagues: string[];
//   status: UserStatus;
//   height: string;
//   position: string;
// }

export interface LeagueTag {
  name: string;
  id: string;
}

export type Position = 'Forward' | 'Mid-fielder' | 'Defender' | 'Goalkeeper';
export type Status = 'Active' | 'Retired';
export type League = 'Laliga' | 'Premier League' | 'Bundesliga' | 'Serie A' | 'Ligue 1' | 'Champions League';

export interface User {
  id: string;
  name: string;
  dateOfBirth: string;
  leagues: string[];
  status: Status;
  height: string;
  position: string;
}

export interface UserFormData extends Omit<User, 'id'> {
  id?: string;
}