import React from 'react';
import { UserStatus } from '../../types/user';

interface StatusBadgeProps {
  status: UserStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const styles = {
    Active: 'bg-[#f97316] text-white',
    Retired: 'bg-[#a3e635] text-white'
  };

  return (
    <span className={`px-2 py-1 text-xs rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}