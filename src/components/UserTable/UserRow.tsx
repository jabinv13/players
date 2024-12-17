import React from 'react';
import { User } from '../../types/user';
import { LeagueTags } from './LeagueTags';
import { StatusBadge } from './StatusBadge';
import { ActionMenu } from './ActionMenu';
import { calculateAge } from '../../utils/dateUtils';

interface UserRowProps {
  user: User;

}

export function UserRow({ user}: UserRowProps) {

  const age = calculateAge(user.dateOfBirth);

  console.log(user)
  return (
    <tr className="hover:bg-gray-50">
      <td className="px-4 py-3">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="px-4 py-3">{user.name}</td>
      <td className="px-4 py-3">{age}</td>
      <td className="px-4 py-3">
        <LeagueTags leagues={user.leagues} />
      </td>
      <td className="px-4 py-3 w-5">
        <StatusBadge status={user.status} />
      </td>
      <td className="px-4 py-3">{user.height}</td>
      <td className="px-4 py-3">{user.position}</td>
      <td className="px-4 py-3">
        <ActionMenu
          user={user.id}
          
        />
      </td>
    </tr>
  );
}