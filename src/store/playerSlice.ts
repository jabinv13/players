import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
  dateOfBirth: string
  leagues: string[]
  status: 'Active' | 'Retired'
  height: string
  position: string
}

interface UsersState {
  users: User[]
  searchQuery: string
}


// export type Position = 'Forward' | 'Mi
// d-fielder' | 'Defender' | 'Goalkeeper';
// export type Status = 'Active' | 'Retired';
// export type League = 'Laliga' | 'Premier League' | 'Bundesliga' | 'Serie A' | 'Ligue 1' | 'Champions League';

const initialState: UsersState = {
  users: [
    {
      id: '1',
      name: 'Lionel Messi',
      dateOfBirth:"1989-12-19",
      leagues: ['Laliga'],
      status: 'Active',
      height: '1.70 m',
      position: 'Forward'
    },
    {
      id: '2',
      name: 'Cristiano Ronaldo',
      dateOfBirth:"1989-12-19",
      leagues: ['Laliga', 'Premier League'],
      status: 'Active',
      height: '1.87 m',
      position: 'Forward'
    },
    {
      id: '3',
      name: 'Thierry Henry',
      dateOfBirth:"1989-12-19",
      leagues: ['Laliga', 'Premier League'],
      status: 'Retired',
      height: '1.87 m',
      position: 'Forward'
    },
    {
      id: '4',
      name: 'Zinedine Zidane',
      dateOfBirth:"1989-12-19",
      leagues: ['Laliga', 'Premier League', ],
      status: 'Retired',
      height: '1.87 m',
      position: 'Mid-fielder'
    },
    {
      id: '5',
      name: 'Luka Modrić',
      dateOfBirth:"1989-12-19",
      leagues: ['Laliga', 'Premier League'],
      status: 'Active',
      height: '1.87 m',
      position: 'Forward'
    }
  ],
  searchQuery: '',
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {


      const newId = (state.users.length + 1).toString();

      const newUser: User = {
        ...action.payload,
        id: newId,
      };
      state.users.push(newUser);


      
    
    // const id=Math.max(...state.users.map(lab => lab.id)) + 1,

   

console.log(action.payload)
    
      // state.users.push(action.payload)
    },
    editUser: (state, action: PayloadAction<User>) => {
      const index = state.users.findIndex(user => user.id === action.payload.id)
      if (index !== -1) {
        state.users[index] = action.payload
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter(user => user.id !== action.payload)
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
  },
})

export const { addUser, editUser, deleteUser, setSearchQuery } = usersSlice.actions
export default usersSlice.reducer