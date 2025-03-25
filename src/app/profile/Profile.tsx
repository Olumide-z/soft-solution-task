"use client";

import Bio from "@/components/Bio";
import ProfileHeader from "@/components/ProfileHeader";
import ProfileImages from "@/components/ProfileImages";
import Hobbies from '@/components/Hoobies';
import Sidebar from "@/components/Sidebar";
import React, { useState } from "react";
import Interests from "@/components/Interests";
import AboutSection from "@/components/AboutSection";

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F6F6F6] pt-[8rem] sm:pt-[9rem] sm:p-[2rem] p-[1rem] flex items-start">
      {/* sidebar */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* hamburger */}
      <button
        className="cursor-pointer flex-[0.08] md:block hidden"
        onClick={() => setIsOpen(true)}
      >
        <img
          src="/images/Menu.svg"
          alt="menu"
          className="h-[18px] w-[18px] object-cover"
        />
      </button>
      {/* content */}
      <div className="md:flex-[0.92] flex-1">
        <ProfileHeader />
        <Bio />
        <ProfileImages />
        <div className="flex items-center flex-col md:flex-row flex-wrap gap-4 md:gap-6">
          <Hobbies />
          <Interests />
          <AboutSection />
        </div>
      </div>
    </div>
  );
};

export default Profile;
