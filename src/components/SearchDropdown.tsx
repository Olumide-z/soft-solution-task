import React from "react";
import { IoSearchSharp } from "react-icons/io5";

interface Props {
  setIsSearch: React.Dispatch<React.SetStateAction<boolean>>;
  isSearch: boolean;
}
const SearchDropdown = ({ setIsSearch, isSearch }: Props) => {
  return (
    <>
      <div
        className={`absolute left-0 w-full h-[70px] bg-white border-b border-gray-300 transition-all duration-300 ease-in-out ${
          isSearch ? "top-0 z-50" : "-top-20"
        }`}
      >
        <div className="flex items-center gap-4 w-4/5 mx-auto h-full">
          <div className="cursor-pointer">
            <IoSearchSharp size={20} />
          </div>
          <div className="w-11/12 h-full">
            <input
              placeholder="Search"
              className="w-full h-full outline-none border-none"
            />
          </div>
          <p className="cursor-pointer" onClick={() => setIsSearch(false)}>
            ✖
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchDropdown;
