const ProgressBar = () => {
  return (
    <div className="w-[176px] flex items-center">
      <div className="w-full bg-[#D9D9D9] rounded-full h-[8px] relative">
        <div
          className="bg-[#EF2424] h-[8px] rounded-full transition-all duration-300"
          style={{ width: "60%" }}
        ></div>
      </div>
      <span className="ml-2 text-sm font-semibold text-gray-700">60%</span>
    </div>
  );
};

export default ProgressBar;
