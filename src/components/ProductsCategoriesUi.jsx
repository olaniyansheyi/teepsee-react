import React, { useState } from "react";
import unknownUser from "@/img/unknownUser.png";
import AddUser from "@/img/AddUser.png";
import Bag from "@/img/icons/Bag.svg";
import Heart from "@/img/icons/Heart.svg";
import Setting from "@/img/icons/Setting.svg";
import { useProducts } from "@/contexts/ProductsContext";
import { useMenu } from "@/contexts/MenuContext";

import { useNavigate, NavLink } from "react-router-dom";
import ProductContainer from "@/components/ProductContainer";
import RecentProductList from "@/components/RecentProductList";
import { useParams } from "react-router-dom";

const ProuctCategoriesUi = ({ currentCategory }) => {
  const { category } = useParams();

  const {
    selectPriceRange,
    applyPriceFilter,
    setPriceRange,
    clearProductFilter,
  } = useProducts();

  const { handleToggleMenu } = useMenu();

  const navigate = useNavigate();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleGoToProfile = () => {
    navigate("/dashboard/profile");
  };

  const handleGoToRoute = (route) => {
    navigate(route);
  };

  const onSetPriceRange = () => {
    clearProductFilter(category);
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;
    setPriceRange({ min, max });
    applyPriceFilter(min, max);
  };

  const onSelectPriceRange = (range) => {
    clearProductFilter(category);
    selectPriceRange(range);
  };

  return (
    <div className="sm:mx-5  mb-8 flex justify-start items-start gap-5">
      <div className="w-[400px] bg-white overflow-y-auto rounded-lg lg:block hidden h-[80vh]">
        <div className="w-full h-full">
          <div className="pt-5 px-6 space-y-3">
            <div className="flex gap-x-3 justify-start items-center">
              <img src={unknownUser} className="w-[90px] rounded-full" alt="" />
            </div>
            <div className="flex flex-col items-start gap-y-5 tracking-wider text-secondary text-lg cursor-pointer mb-5">
              <div className="flex items-center justify-center gap-x-6">
                <img src={AddUser} alt="" />
                <p onClick={handleGoToProfile} className="cursor-pointer">
                  Profile
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <img src={Bag} alt="" />
                <p onClick={() => handleGoToRoute("/track-order")}>
                  Track Orders
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <img src={Heart} alt="" />
                <p onClick={() => handleGoToRoute("/dashboard/favorites")}>
                  Favourites
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <img src={Heart} alt="" />
                <p onClick={() => handleGoToRoute("/faq")}>F.A.Q</p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <img src={Bag} alt="" />
                <p onClick={() => handleGoToRoute("/dashboard/order-history")}>
                  My Orders
                </p>
              </div>
              <div className="flex items-center justify-center gap-x-6">
                <img src={Setting} alt="" />
                <p
                  onClick={() =>
                    handleGoToRoute("/dashboard/setting/change-password")
                  }
                >
                  Settings
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-y-4 text-white">
              <button
                onClick={() => navigate("/login")}
                className="bg-secondary rounded-lg py-3 w-[9rem]"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-primary rounded-lg py-3 w-[9rem]"
              >
                Sign Up
              </button>
            </div>

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
                  <span>All</span>
                </NavLink>
                <NavLink to="/categories/jewelery">
                  <span>Jewelery</span>
                </NavLink>
                <NavLink to="/categories/electronics">
                  <span>Electronics</span>
                </NavLink>
                <NavLink to="/categories/men%27s%20clothing">
                  <span>mens clothing</span>
                </NavLink>
                <NavLink to="/categories/women%27s%20clothing">
                  <span>womens clothing</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center flex-col">
        <div className=" w-full ">
          <ProductContainer productInfo={currentCategory} />
        </div>

        <div className="mx-5">
          <RecentProductList />
        </div>
      </div>
    </div>
  );
};

export default ProuctCategoriesUi;
