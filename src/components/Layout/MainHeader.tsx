
import {  User } from 'lucide-react';

export function MainHeader() {
  return (
    <header className="bg-blue-600 w-full">
      <div className="h-12 px-4 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center">
          <div className="text-white text-xl font-semibold">Typography</div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-4">

          {/* Profile */}
          <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-700">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            {/* <span className="hidden md:inline text-white">Admin</span> */}
          </button>
        </div>
      </div>
    </header>
  );
}