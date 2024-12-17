import React from 'react';
import { User } from '../../types/user';
import { TableHeader } from './TableHeader';
import { UserRow } from './UserRow';
import { Pagination } from './Pagination';

interface UserTableProps {
  users: User[];
  currentPage: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function UserTable({
  users,
  currentPage,
  itemsPerPage,
  onPageChange,
  
}: UserTableProps) {
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const displayedUsers = users.slice(start, end);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <TableHeader />
          <tbody className="divide-y divide-gray-200">
            {displayedUsers.map((user) => (
              <UserRow
                key={user.id}
                user={user}
                
              />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </>
  );
}