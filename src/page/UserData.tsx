import React, { useState } from 'react'
import { SearchBar } from '../components/SearchBar'
import { UserTable } from '../components/UserTable/UserTable'
import { useSelector } from 'react-redux';
import { RootState } from '../store'
import { Link } from 'react-router-dom';

const UserData = () => {

      const [currentPage, setCurrentPage] = useState(1);
     
      const itemsPerPage = 5;
    
      const handleEdit = (id: string) => {
        console.log('Edit user:', id);
      };
    
      const handleDelete = (id: string) => {
        console.log('Delete user:', id);
      };
    

 //==============================================================================//
 
 

 const { users, searchQuery } = useSelector((state: RootState) => state.players)

const filteredUsers = users.filter(user =>
  user.name.toLowerCase().includes(searchQuery.toLowerCase())
) 
  return (
   <div className="bg-white rounded-lg shadow">
               <div className='flex items-center justify-between px-3'>
               <SearchBar/>
               <Link
                 to="/user/new"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
               New</Link>
               </div>
            
               <UserTable
                 users={filteredUsers}
                 currentPage={currentPage}
                 itemsPerPage={itemsPerPage}
                 onPageChange={setCurrentPage}
                 onEdit={handleEdit}
                 onDelete={handleDelete}
               />
             </div>
  )
}

export default UserData