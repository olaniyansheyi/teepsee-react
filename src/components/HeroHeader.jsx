import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "@/img/logo.png";
import searchIcon from "@/img/search.svg";
import cart from "@/img/cart.svg";
import menu from "@/img/menu.png";
import { useMenu } from "@/contexts/MenuContext";

const HeroHeader = () => {
  const { handleToggleMenu, handleToggleSearch } = useMenu();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search-result/${searchQuery}`);
    handleToggleSearch();
    setSearchQuery("");
  };

  return (
    <div className="text-white flex justify-between items-center lg:gap-x-5">
      <div className="w-[5.8rem] md:w-[16%] lg:w-[18%] cursor-pointer">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="hidden lg:flex justify-center gap-x-6 items-center w-auto">
        <form onSubmit={handleSearch} className="relative text-white">
          <input
            required
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="pl-8 pr-4 py-1 border border-white rounded-lg outline-none w-full bg-transparent placeholder:text-white"
            placeholder="Search"
          />
          <img
            src={searchIcon}
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white"
          />
        </form>
        <nav className="flex justify-center items-center gap-x-4 font-extralight tracking-wider text-md">
          <NavLink to="/track-order">Track Order</NavLink>
          <NavLink to="/faq">FAQs</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink
            to="/cart"
            className="flex gap-x-1 items-center justify-center"
          >
            <img src={cart} alt="Cart" />
            <p>Cart</p>
          </NavLink>
        </nav>
      </div>
      <NavLink to="/signup">
        <button className="px-5 py-1 bg-white border-none rounded-md text-secondary lg:block hidden">
          Sign Up
        </button>
      </NavLink>
      <div className="lg:hidden flex justify-center items-center gap-x-3 cursor-pointer">
        <img src={searchIcon} alt="Search Icon" onClick={handleToggleSearch} />
        <img
          src={menu}
          alt="Menu"
          onClick={handleToggleMenu}
          className="w-[25px]"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
