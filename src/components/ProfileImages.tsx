import React, { useState } from "react";

const ProfileImages = () => {
  const [images, setImages] = useState<(string | null)[]>([
    null,
    null,
    null,
    null,
    null,
  ]);

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const updatedImages = [...images];
      updatedImages[index] = URL.createObjectURL(file);
      setImages(updatedImages);
    }
  };

  return (
    <div className="mt-6 border border-[var(--color-grey)] flex items-center justify-center rounded-[8px] bg-white h-fit py-5 px-4 max-w-[550px]">
      <div className="flex items-center gap-5 flex-wrap">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] border border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer relative"
          >
            <label className="w-full h-full flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt={`Uploaded ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-gray-400">
                  <span className="text-[0.75rem]">Add Photo</span>
                  <img
                    src="/images/AddImage.png"
                    alt="Add"
                    className="w-8 h-8 cursor-pointer"
                  />
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleImageChange(e, index)}
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileImages;
