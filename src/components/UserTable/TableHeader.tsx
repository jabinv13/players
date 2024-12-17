import React from 'react';

export function TableHeader() {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="w-12 px-4 py-3">
          <input type="checkbox" className="rounded border-gray-400" />
        </th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500">User</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500">Age</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500 w-64">Leagues Played</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500">Status</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500">Height</th>
        <th className="px-4 py-3 text-left text-sm font-medium text-black-500">Position</th>
        <th className="w-12 px-4 py-3"></th>
      </tr>
    </thead>
  );
}