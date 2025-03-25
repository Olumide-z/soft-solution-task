const SearchBox = () => {
    return (
      <div className="relative w-[220px] h-[33px] flex items-center">
        <img src="/images/Search.svg" alt="Search" className="absolute left-4 top-1/2 transform -translate-y-1/2 w-[17px] h-[17px]" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-11 pr-4 py-2 border-[1.5px] border-[#3E7BEA] rounded-[50px] outline-none text-[12px]"
        />
      </div>
    );
  };
  
  export default SearchBox;
  