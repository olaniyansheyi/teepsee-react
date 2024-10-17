import React, { useState } from "react";
import { useMenu } from "@/contexts/menuContext";
import cancelImage from "@/img/cancel.png";
import { useNavigate } from "react-router-dom";

const SearchTab = () => {
  const { handleToggleSearch } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/search-result/${searchQuery}`);
    handleToggleSearch();
    setSearchQuery("");
  };

  return (
    <div className="w-[85%] mx-auto bg-white p-4 rounded-xl absolute top-5 left-[-50%] right-[-50%] flex flex-col gap-y-2 items-start lg:hidden z-50">
      <div className="w-full h-full relative">
        <img
          src={cancelImage}
          className="w-[14px] absolute top-0 right-0 cursor-pointer"
          alt=""
          onClick={handleToggleSearch}
        />
      </div>
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="text"
          className="w-full rounded-full border-[3px] py-2 px-4 mt-5"
          placeholder="Search Products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      <p className="text-secondary text-sm">
        Search Products By name or category
      </p>
    </div>
  );
};

export default SearchTab;
