"use client"

import React, { useState } from 'react';

const Bio = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [bioText, setBioText] = useState('A few words about myself');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <div className="mt-6 border border-[var(--color-grey)] rounded-[8px] bg-white h-[100px] max-w-[550px]">
      <div className="flex items-center gap-5 p-4 text-gray-800 text-sm">
        {isEditing ? (
          <input
            type="text"
            value={bioText}
            onChange={(e) => setBioText(e.target.value)}
            onBlur={handleBlur}
            autoFocus
            className="border border-gray-300 rounded px-2 py-1 w-full outline-none"
          />
        ) : (
          <p>{bioText}</p>
        )}
        <img
          src="/images/Pencil.svg"
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default Bio;
