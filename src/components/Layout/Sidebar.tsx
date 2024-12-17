
import { Home, Menu } from 'lucide-react';
import { NavLink } from './NavLink';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  return (
    <div className={`bg-white border-r border-gray-200 h-screen transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!isCollapsed && <span className="font-semibold text-xl">Logo</span>}
        <button 
          onClick={onToggle}
          className="p-1 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      
      <nav className="p-2 space-y-1">
        <NavLink icon={Home} label="Dashboard" isCollapsed={isCollapsed} />
        
        
      </nav>
    </div>
  );
}