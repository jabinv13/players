import React  from 'react';

interface RadioGroupProps {
  options: string[];
  name: string;
  value: string;
  onChange: (value: string) => void;
  
  
}



export const RadioGroup: React.FC<RadioGroupProps> = ({ options, name, value, onChange }) => {



  
  return (
      <div className="absolute w-full z-10 bg-white space-y-2 max-h-48 overflow-y-auto border rounded-md p-2">
        {options.map((option) => (
          <div key={option} className="flex items-center">
            <input
              type="radio"
              id={`${name}-${option}`}
              name={name}
              value={option}
              checked={value === option}
              onChange={(e) => onChange(e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500"
            />
            <label htmlFor={`${name}-${option}`} className="ml-2 text-sm text-gray-700">
              {option}
            </label>
          </div>
        ))}
      </div>
    
  );
};