import React, { useState } from "react";
import { useProfileStore } from "@/store/profileStore";

interface ProfileModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileModal = ({ isOpen, setIsOpen }: ProfileModalProps) => {
  const { profile, updateProfile } = useProfileStore();
  const [formData, setFormData] = useState(profile);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    updateProfile(formData);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999999]">
      <div className="bg-white relative p-6 rounded-lg shadow-lg w-[300px] h-[600px] sm:w-[500px] md:w-[600px] overflow-auto">
        <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 cursor-pointer"
        >
          ✖
        </button>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
          <label className="flex flex-col">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="p-2 border rounded"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label className="flex flex-col">
            Age:
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Occupation:
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Relationship Status:
            <input
              type="text"
              name="relationship"
              value={formData.relationship}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Height Range (cm):
            <input
              type="text"
              name="height"
              value={formData.height}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Weight Range (kg):
            <input
              type="text"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Religion:
            <input
              type="text"
              name="religion"
              value={formData.religion}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
          <label className="flex flex-col">
            Nationality:
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </label>
        </form>

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
  );
};

export default ProfileModal;
