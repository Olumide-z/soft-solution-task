"use client"

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Dropdown = () => {
  const [selected, setSelected] = useState("Single");
  const [isOpen, setIsOpen] = useState(false);

  const options = ["Single", "Married", "Divorced"];

  return (
    <div className="flex items-center space-x-2 relative">
      <p className="text-sm font-[600]">Relationship Type:</p>
      <div className="relative">
        <button
          className="flex items-center justify-between bg-white border border-gray-300 px-3 py-1 rounded-md shadow-sm text-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <FiChevronDown className="w-4 h-4 ml-2 text-gray-500" />
        </button>
        {isOpen && (
          <ul className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-md z-10">
            {options.map((option) => (
              <li
                key={option}
                className="px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
