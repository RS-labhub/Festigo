import React, { useState } from 'react';

interface DropdownMenuProps {
  options: string[];
  value?:string;
 
  onSelect: (option: string) => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options,value, onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
   const [selected,setSelected]=useState(value||"");
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelected(option)
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-10 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selected || 'Options'}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <div
              
                key={index}
                className={`${
                  selected === option ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                } block px-5 py-2 text-sm w-auto`}
                role="menuitem"
                tabIndex={-1}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
