import React from 'react';
import { Plus } from 'lucide-react';
import { SearchBar } from './SearchBar';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onNewUser: () => void;
}

export function Header({ searchQuery, onSearchChange, onNewUser }: HeaderProps) {
  return (
    <div className="px-6 py-4 border-b border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold text-gray-900">User management</h1>
        <button
          onClick={onNewUser}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          NEW
        </button>
      </div>
      <SearchBar value={searchQuery} onChange={onSearchChange} />
    </div>
  );
}