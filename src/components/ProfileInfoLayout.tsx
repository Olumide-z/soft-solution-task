import React, { useState } from "react";

interface TitleProps {
  title: string;
  data: { name: string; image: string }[];
}

const defaultImages = [
  "/images/Bike.png",
  "/images/Cooking.png",
  "/images/Dance.png",
  "/images/Arts.png",
  "/images/Umbrella.png",
];

const ProfileInfoLayout = ({ title, data }: TitleProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState([...data]);

  const handleEditToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (index: number, value: string) => {
    const newData = [...updatedData];
    newData[index].name = value;
    setUpdatedData(newData);
  };

  const handleAddItem = () => {
    const randomImage =
      defaultImages[Math.floor(Math.random() * defaultImages.length)];
    setUpdatedData([...updatedData, { name: "New Item", image: randomImage }]);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-6 border border-[var(--color-grey)] overflow-auto rounded-[8px] bg-white h-fit md:h-[450px] w-[100%] md:w-[350px] p-4 pt-4 pb-8 md:pt-4 md:pb-4">
      <div className="flex items-center justify-between">
        <p>{title}</p>
        <img
          src="/images/Create.svg"
          alt="edit-icon"
          className="cursor-pointer"
          onClick={handleEditToggle}
        />
      </div>

      <div className="flex items-center flex-wrap gap-5">
        {updatedData.map((item, index) => (
          <div
            key={index}
            className="flex items-center w-[60px] h-[60px] flex-col gap-2 mt-7"
          >
            <img src={item.image} className="object-cover w-full h-full" />
            <span className="text-[0.7rem] w-[100%] text-center">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[99999999] overflow-auto">
          <div className="bg-white relative p-6 rounded-lg w-[300px] md:w-[400px]">
            <h2 className="text-lg font-bold mb-4">Edit {title}</h2>

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              ✖
            </button>

            {updatedData.map((item, index) => (
              <div key={index} className="flex items-center gap-3 mb-3">
                <img
                  src={item.image}
                  className="w-10 h-10 object-cover rounded"
                />
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="border border-gray-300 text-sm outline-none rounded p-1 w-full"
                />
              </div>
            ))}

            <button
              onClick={handleAddItem}
              className="w-full bg-gray-200 py-2 mt-3 rounded"
            >
              + Add Item
            </button>

            <div className="mt-4 font-sm w-full">
              <button
                onClick={handleSave}
                className=" bg-[#00A389] text-white w-full px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfoLayout;
