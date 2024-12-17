import { User } from '../types/user';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Lionel Messi',
    age: 37,
    leagues: ['LaLiga', 'League 1', 'League 2', 'League 3', 'League 4'],
    status: 'Active',
    height: '1.70 m',
    position: 'Forward'
  },
  {
    id: '2',
    name: 'Cristiano Ronaldo',
    age: 39,
    leagues: ['LaLiga', 'League 1'],
    status: 'Active',
    height: '1.87 m',
    position: 'Forward'
  },
  {
    id: '3',
    name: 'Thierry Henry',
    age: 47,
    leagues: ['LaLiga', 'League 1'],
    status: 'Retired',
    height: '1.87 m',
    position: 'Forward'
  },
  {
    id: '4',
    name: 'Zinedine Zidane',
    age: 52,
    leagues: ['LaLiga', 'League 1', 'League 2'],
    status: 'Retired',
    height: '1.87 m',
    position: 'Mid-fielder'
  },
  {
    id: '5',
    name: 'Luka Modrić',
    age: 39,
    leagues: ['LaLiga', 'League 1', 'League 2'],
    status: 'Active',
    height: '1.87 m',
    position: 'Forward'
  }
];