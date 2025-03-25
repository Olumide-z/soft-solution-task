"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";
import { useProfileStore } from "@/store/profileStore";

const ProfileHeader = () => {
  const [banner, setBanner] = useState("/images/cover-image.png");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("Temiloluwa");
  const [age, setAge] = useState(27);
  const [location, setLocation] = useState("Lagos");
  const [isOpen, setIsOpen] = useState(false);

  const { profile, setProfileImage } = useProfileStore();

  const handleSave = () => {
    setIsModalOpen(false);
  };

  const router = useRouter();

  // Handle banner change
  const handleBannerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setBanner(URL.createObjectURL(event.target.files[0]));
    }
  };

  // Handle profile image change
  const handleProfileImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const newImageUrl = URL.createObjectURL(event.target.files[0]);
      setProfileImage(newImageUrl);
    }
  };

  const openProfileModal = () => {
    setIsOpen(true)
  }

  return (
    <section className="relative w-full max-w-[1150px] rounded-lg">
      {/* Banner Image */}
      <div className="relative w-full h-40 md:h-56">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Update Cover Button */}
        <label className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-2 rounded cursor-pointer md:text-sm">
          Update Cover
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </label>

        <button
          onClick={() => router.back()}
          className="absolute top-3 left-3 bg-black/70 text-white text-xs px-3 py-2 rounded cursor-pointer md:text-sm"
        >
          Back
        </button>
      </div>

      {/* Profile Section */}
      <div className="relative flex flex-col md:flex-row items-center gap-4 p-2">
        <div className="absolute md:top-[-9rem] sm:top-[-6rem] top-[-4rem] left-[1.5rem] sm:left-[3rem] flex items-start gap-5">
          {/* Profile Image */}
          <div className="relative sm:w-[150px] w-[120px] sm:h-[150px] h-[120px] md:w-[180px] md:h-[180px]">
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />

            <label className="absolute bottom-[-1rem] right-[-1rem] text-[1.2rem]  bg-blue-800 text-white w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
              +
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfileImageChange}
              />
            </label>
          </div>

          {/* User Info */}
          <div className="text-center md:text-left mt-4">
            <div className="text-[1rem] md:text-xl font-semibold flex items-center gap-3">
              <p>
                {name}, {age}
              </p>
              <span
                className="inline-block ml-1 cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <img src="/images/Create.svg" alt="edit-icon" />
              </span>
            </div>
            <p className="text-sm md:text-base">{location}</p>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999999]">
              <div className="bg-white relative p-6 rounded-lg shadow-lg w-80">
                <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 cursor-pointer"
                >
                  ✖
                </button>

                <div className="flex flex-col gap-3">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 outline-none"
                    placeholder="Name"
                  />
                  <input
                    type="number"
                    value={age}
                    onChange={(e: any) => setAge(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
                    placeholder="Age"
                  />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2"
                    placeholder="Location"
                  />
                </div>

                {/* Modal Buttons */}
                <div className="flex justify-end gap-3 mt-4">
                  <button
                    onClick={handleSave}
                    className="bg-[#00A389] text-white px-4 py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Buttons */}
      <div className="flex justify-end gap-3 sm:mt-0 mt-[4rem]">
        <button onClick={() => openProfileModal()} className="bg-[var(--color-red)] cursor-pointer text-white px-4 py-2 rounded-[50px] text-sm">
          Edit Profile
        </button>
        <button className="bg-[var(--color-red)] text-white px-4 py-2 rounded-[50px] text-sm">
          Edit Match Setup
        </button>
      </div>
      {/* profile modal */}
      {isOpen && <ProfileModal isOpen={isOpen} setIsOpen={setIsOpen}/>}
    </section>
  );
};

export default ProfileHeader;
