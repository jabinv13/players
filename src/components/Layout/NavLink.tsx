import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NavLinkProps {
  icon: LucideIcon;
  label: string;
  isActive?: boolean;
  isCollapsed: boolean;
}

export function NavLink({ icon: Icon, label, isActive, isCollapsed }: NavLinkProps) {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
        isActive 
          ? 'bg-blue-50 text-blue-600' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      {!isCollapsed && <span className="ml-3">{label}</span>}
    </a>
  );
}