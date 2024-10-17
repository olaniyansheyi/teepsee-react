import React, { useState } from "react";
import { useMenu } from "@/contexts/MenuContext";

import { useProducts } from "@/contexts/ProductsContext";
import cancel from "@/img/cancel.png";
import unknownUser from "@/img/unknownUser.png";
import AddUser from "@/img/AddUser.png";
import Bag from "@/img/icons/Bag.svg";
import Heart from "@/img/icons/Heart.svg";
import Setting from "@/img/icons/Setting.svg";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const Menu = () => {
  const { handleToggleMenu, openMenu } = useMenu();
  const { category } = useParams();

  const {
    selectPriceRange,
    applyPriceFilter,
    setPriceRange,
    clearProductFilter,
  } = useProducts();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const onSetPriceRange = () => {
    clearProductFilter(category);
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    setPriceRange({ min, max });
    applyPriceFilter(min, max);
    handleToggleMenu();
  };

  const onSelectPriceRange = (range) => {
    clearProductFilter(category);
    selectPriceRange(range);
    handleToggleMenu();
  };

  const handleGoToRoute = (route) => {
    handleToggleMenu();
    navigate(route);
  };

  return (
    <div className={`fixed inset-0 z-50 ${openMenu ? "block" : "hidden"}`}>
      <div
        className="z-10 fixed inset-0 bg-black bg-opacity-50"
        onClick={handleToggleMenu}
      ></div>
      <div className="w-[280px] bg-white h-full z-20 absolute left-0 overflow-y-auto">
        <div className="w-full h-full relative">
          <img
            src={cancel}
            className="w-[18px] absolute top-8 right-5 cursor-pointer"
            alt="Cancel"
            onClick={handleToggleMenu}
          />
          <div className="pt-10 px-6 space-y-4">
            <div className="flex gap-x-3 justify-start items-center">
              <div>
                <img
                  src={unknownUser}
                  className="w-[80px] rounded-full"
                  alt="Avatar"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg">
              <div className="flex items-center justify-center gap-x-6">
                <img src={AddUser} alt="Profile" />
                <p className="cursor-pointer">Profile</p>
              </div>
              <div
                className="flex items-center justify-center gap-x-6"
                onClick={() => handleGoToRoute("/track-order")}
              >
                <img src={Bag} alt="Track Orders" />
                <p>Track Orders</p>
              </div>
              <div
                className="flex items-center justify-center gap-x-6"
                onClick={() => handleGoToRoute("/dashboard/favorites")}
              >
                <img src={Heart} alt="Favorites" />
                <p>Favorites</p>
              </div>
              <div
                className="flex items-center justify-center gap-x-6"
                onClick={() => handleGoToRoute("/faq")}
              >
                <img src={Heart} alt="F.A.Q" />
                <p>F.A.Q</p>
              </div>
              <div
                className="flex items-center justify-center gap-x-6"
                onClick={() => handleGoToRoute("/dashboard/order-history")}
              >
                <img src={Bag} alt="My Orders" />
                <p>My Orders</p>
              </div>
              <div
                className="flex items-center justify-center gap-x-6"
                onClick={() =>
                  handleGoToRoute("/dashboard/setting/change-password")
                }
              >
                <img src={Setting} alt="Settings" />
                <p>Settings</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-4 text-white">
              <button
                onClick={() => handleGoToRoute("/login")}
                className="bg-secondary rounded-lg py-3 w-[9rem]"
              >
                Login
              </button>
              <button
                onClick={() => handleGoToRoute("/signup")}
                className="bg-primary rounded-lg py-3 w-[9rem]"
              >
                Sign Up
              </button>
            </div>

            {/* {productsStore.isInProductPage && ( */}
            <div className="flex flex-col gap-y-4">
              <div className="mx-auto space-y-1 tracking-wider">
                <h1 className="text-lg">Custom Price range</h1>
                <form
                  className="flex gap-x-1 w-full"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onSetPriceRange();
                  }}
                >
                  <input
                    type="text"
                    className="bg-[#e6e3e3] py-1 outline-none rounded-lg border-[#b1a7a7] w-1/3 text-center border-2"
                    placeholder="Min"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <input
                    type="text"
                    className="bg-[#e6e3e3] py-1 outline-none rounded-lg border-[#b1a7a7] w-1/3 text-center border-2"
                    placeholder="Max"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white rounded-lg py-1 px-4 bg-secondary"
                  >
                    GO
                  </button>
                </form>
              </div>

              <div className="me-auto space-y-1 tracking-wider">
                <h1 className="text-lg">Prices</h1>
                <div className="flex gap-y-4 flex-col w-full justify-end items-start font-semibold text-md">
                  <div className="flex justify-center items-center gap-x-3">
                    <input
                      type="radio"
                      name="priceRange"
                      onClick={() => onSelectPriceRange("under100")}
                    />
                    <p>Under #100.00</p>
                  </div>
                  <div className="flex justify-center items-center gap-x-3">
                    <input
                      type="radio"
                      name="priceRange"
                      onClick={() => onSelectPriceRange("100to200")}
                    />
                    <p>#100.00-#200.00</p>
                  </div>
                  <div className="flex justify-center items-center gap-x-3">
                    <input
                      type="radio"
                      name="priceRange"
                      onClick={() => onSelectPriceRange("201to1000")}
                    />
                    <p>#201.00-#1,000.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start gap-y-5 tracking-wider">
              <button className="py-4 text-left border-[#999999] border-b-[1px] text-primary text-lg w-full">
                OUR CATEGORIES
              </button>
              <div className="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg mb-10">
                <NavLink to="/categories/all">
                  <span onClick={handleToggleMenu}>All</span>
                </NavLink>
                <NavLink to="/categories/jewelery">
                  <span onClick={handleToggleMenu}>Jewelery</span>
                </NavLink>
                <NavLink to="/categories/electronics">
                  <span onClick={handleToggleMenu}>Electronics</span>
                </NavLink>
                <NavLink to="/categories/men%27s%20clothing">
                  <span onClick={handleToggleMenu}>mens clothing</span>
                </NavLink>
                <NavLink to="/categories/women%27s%20clothing">
                  <span onClick={handleToggleMenu}>womens clothing</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
