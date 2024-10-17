import React, { useState } from "react";
import { Link, useNavigate, Outlet } from "react-router-dom";
import teepseeBlack from "@/img/teepseeBlack.png";
import searchBlack from "@/img/searchBlack.png";
import Buy from "@/img/icons/Buy.svg";
import menuBlack from "@/img/menuBlack.png";
import { useMenu } from "@/contexts/MenuContext";
import { useCart } from "@/contexts/CartContext";
import Footer from "@/components/Footer";
import SearchTab from "@/components/SearchTab";
import Menu from "@/components/Menu";

const AppLayout = () => {
  const navigate = useNavigate();
  const { cartItemCount } = useCart();
  const { handleToggleMenu, handleToggleSearch, openSearchQuery, openMenu } =
    useMenu();

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    navigate(`/search-result/${searchQuery}`);
    handleToggleSearch();
    setSearchQuery("");
  };

  return (
    <div className="pt-5  px-4 sm:px-8 pb-16 relative w-full ">
      {openMenu && <Menu />}
      {openSearchQuery && <SearchTab />}
      <div className="text-secondary flex justify-between items-center md:gap-x-5">
        <div className="w-[5.8rem] md:w-[16%] lg:w-[10%]">
          <Link to="/">
            <img src={teepseeBlack} alt="" className="hidden lg:block" />
          </Link>
          <img
            src={menuBlack}
            className="lg:hidden block w-[25px] cursor-pointer"
            alt=""
            onClick={handleToggleMenu}
          />
        </div>
        <div className="hidden lg:flex justify-center gap-x-6 items-center w-auto">
          <form onSubmit={handleSearch} className="relative text-secondary">
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
              type="text"
              className="pl-8 pr-4 py-1 border border-secondary rounded-lg outline-none w-full bg-transparent placeholder:text-secondary"
              placeholder="Search"
            />
            <img
              src={searchBlack}
              alt="Search Icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary cursor-pointer"
            />
          </form>
          <nav className="flex justify-center items-center gap-x-4 font-semibold tracking-wider text-md">
            <Link to="/track-order">Track Order</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/login">Login</Link>
            <Link
              to="/cart"
              className="flex gap-x-1 items-center justify-center"
            >
              <img src={Buy} alt="" />
              <p>Cart</p>
            </Link>
          </nav>
        </div>
        <Link to="/signup">
          <button className="px-5 py-1 bg-primary border-none rounded-md text-white lg:block hidden">
            Sign Up
          </button>
        </Link>
        <div className="lg:hidden flex justify-center items-center gap-x-3">
          <img
            src={searchBlack}
            alt=""
            onClick={handleToggleSearch}
            className="w-[28px] cursor-pointer"
          />
          <Link to="/cart" className="relative w-[28px]">
            <img src={Buy} alt="" className="w-[28px]" />
            <div className="absolute w-[15px] h-[15px] rounded-full items-center justify-center flex bg-primary text-white top-[0] right-[0]">
              <p className="text-[10px]">{cartItemCount}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
