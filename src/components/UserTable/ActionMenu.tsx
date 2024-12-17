import React, { useState, useRef, useEffect } from 'react';
import { MoreVertical, Edit, Trash2 } from 'lucide-react';
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/playerSlice';

interface ActionMenuProps {
  user:string
}

export function ActionMenu({user }: ActionMenuProps) {

 


  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const dispatch=useDispatch();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-1 hover:bg-gray-100 rounded-full"
      >
        <MoreVertical className="w-5 h-5 text-gray-500" />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg z-10 border">
          <Link
              to={`/user/${user}`}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
          >
            <Edit className="w-4 h-4" />
            Edit
          </Link>
          <button
            onClick={() => {
               dispatch(deleteUser(user))
              setIsOpen(false);
            }}
            className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2 text-red-600"
          >
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}