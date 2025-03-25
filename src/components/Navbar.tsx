"use client";

import Image from "next/image";
import React, { useState } from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import Sidebar from "./Sidebar";
import { IoSearch } from "react-icons/io5";
import SearchDropdown from "./SearchDropdown";
import { useProfileStore } from "@/store/profileStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false)

  const { profile, setProfileImage } = useProfileStore();

  const showSearchDropdown = () => {
    setIsSearch(true)
  }

  return (
    <nav className="h-[71px] bg-[#fff] pr-6 shadow-md w-full fixed flex items-center justify-between z-[9999]">
      <div className="md:flex items-center justify-between hidden">
        {/* logo */}
        <div className="w-[194px] h-[71px] relative">
          <Image
            src="/images/logo.svg"
            fill
            className="object-cover"
            alt="logo"
          />
        </div>
        {/* search */}
        <div className="pl-12 flex items-center gap-4">
          <SearchBox />
          <Filter />
        </div>
      </div>
      {/* sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* hamburger */}
      <button className="cursor-pointer pl-6 md:hidden flex" onClick={() => setIsOpen(true)}>
        <img
          src="/images/Menu.svg"
          alt="menu"
          className="h-[18px] w-[18px] object-cover"
        />
      </button>
      {/* smaller screen logo */}
      <div className="w-[194px] h-[71px] relative md:hidden flex">
        <Image
          src="/images/logo.svg"
          fill
          className="object-cover"
          alt="logo"
        />
      </div>
      <div className="flex gap-4 items-center">
        <IoSearch size={20} className="md:hidden flex cursor-pointer" onClick={showSearchDropdown}/>
        <img
          src="/images/Alarm.svg"
          alt="notification"
          className="h-[25px] w-[25px] object-cover"
        />
        <img
          src={profile.profileImage}
          alt="profile pcture"
          className="sm:h-[50px] h-[40px] sm:w-[50px] w-[40px] object-cover rounded-full"
        />
      </div>
      {/* search dropdown */}
      <SearchDropdown setIsSearch={setIsSearch} isSearch={isSearch} />
    </nav>
  );
};

export default Navbar;
