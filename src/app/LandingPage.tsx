"use client";

import Card from "@/components/Card";
import Dropdown from "@/components/Dropdown";
import ProgressBar from "@/components/ProgressBar";
import Sidebar from "@/components/Sidebar";
import { cardData } from "@/constants/data";
import { useProfileStore } from "@/store/profileStore";
import React, { useState } from "react";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { profile } = useProfileStore();

  return (
    <section className="bg-[#F6F6F6] pt-[7rem] sm:pt-[9rem] sm:p-[2rem] p-4 flex items-start">
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
        <div className="flex items-start flex-col sm:flex-row sm:items-center gap-4 sm:gap-[6rem]">
          {/* header */}
          <div className="flex items-center flex-wrap gap-5">
            <img
              src={profile.profileImage}
              alt="profile pcture"
              className="sm:h-[120px] h-[95px] sm:w-[120px] w-[95px] object-cover rounded-full"
            />
            <div className="text-[#000]">
              <p className="text-sm font-[600]">Welcome, Temiloluwa</p>
              <span className="text-[0.75rem] mt-8">
                My Profile Completeness
              </span>
              <ProgressBar />
            </div>
          </div>

          {/* relationship status */}
          <Dropdown />
        </div>
        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-[1380px]:grid-cols-5 gap-3 sm:gap-4 mt-8">
          {cardData?.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
