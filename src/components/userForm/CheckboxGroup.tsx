import React, { useEffect, useRef } from 'react';

interface CheckboxGroupProps {
  options: string[];
  values: string[];
  onChange: (values: string[]) => void;
  setIsLeaguesOpen:React.Dispatch<React.SetStateAction<boolean>>

}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ options, values, onChange,setIsLeaguesOpen }) => {
  const handleChange = (option: string) => {
    const newValues = values.includes(option)
      ? values.filter((v) => v !== option)
      : [...values, option];
    onChange(newValues);
  };

  //change to custom hook

   const menuRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
          setIsLeaguesOpen(false);
        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

  return (
    
      <div ref={menuRef} className="absolute w-full z-10 bg-white space-y-2 max-h-48 overflow-y-auto border rounded-md p-2">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="checkbox"
              id={`league-${option}`}
              checked={values.includes(option)}
              onChange={() => handleChange(option)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 rounded"
            />
            <label htmlFor={`league-${option}`} className="ml-2 text-sm text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    
  );
};