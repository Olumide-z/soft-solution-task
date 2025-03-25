"use client";

import { sidebarData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";
import SearchBox from "./SearchBox";
import Filter from "./Filter";
import { useProfileStore } from "@/store/profileStore";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  
  const { profile } = useProfileStore();

  // Close sidebar when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 z-[999999] h-full overflow-auto w-[284px]  bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        onClick={() => setIsOpen(false)}
        className="absolute top-4 right-4 cursor-pointer"
      >
        ✖
      </button>
      <div className="p-6 pt-[3rem] flex items-center justify-center flex-col">
        <img
          src={profile.profileImage}
          alt="profile pcture"
          className="h-[90px] w-[90px] object-cover rounded-full"
        />
        <p className="text-[1rem] my-3 font-[600]">Temiloluwa</p>
        <div>
          {sidebarData.map((item, index) => {
            const isActive = pathname === item.link;

            return (
              <Link
                href={item.link}
                key={index}
                className={`flex items-center gap-8 p-4 rounded-lg transition-all duration-300 ${
                  isActive ? "bg-[var(--color-red)] text-white" : "text-black"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={item.icon}
                  className={`object-cover w-[20px] h-[20px] transition-all ${
                    isActive ? "filter brightness-0 invert" : ""
                  }`}
                  alt={item.name}
                />
                <span className="text-sm">{item.name}</span>
              </Link>
            );
          })}
        </div>
        <div className="md:hidden flex items-center mt-4 justify-center">
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
