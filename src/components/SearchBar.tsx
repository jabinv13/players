import React from 'react';
import { Search, Filter } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setSearchQuery } from '../store/playerSlice'



export function SearchBar() {

  const {  searchQuery } = useSelector((state: RootState) => state.players);
  const dispatch = useDispatch();
  return (
    <div className=" w-[350px] flex items-center m-5 pt-5">
      <div className="relative pt-2 border border-gray-300 focus-within:ring-2 focus-within:ring-black focus-within:border-transparent rounded-sm" >
      <Search className="absolute left-3 top-6 text-gray-400 w-5 h-5" />
      <label 
          htmlFor="search" 
          className="absolute top-0 left-4 -translate-y-1/2 bg-white px-1 text-sm text-gray-500"
        >
          Search
        </label>
      <input
        type="text"
        placeholder="Search by name, email, etc."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="outline-none pl-10 pr-4 py-3 w-full   rounded-md  "
      />
      </div>
      
      <button className="ml-2 p-2 s  hover:bg-gray-50">
        <Filter className="w-5 h-5 text-gray-500 fill-black" />
      </button>
      {/* <span className='absolute top-[6px] left-6  text-gray-500'>search</span> */}
    </div>
  );
}