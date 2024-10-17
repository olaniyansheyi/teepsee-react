import React from "react";
import exploreImage from "../img/explore.png";
import checkoutImage from "../img/checkout.png";
import teepseeImage from "../img/teepsee.png";
const Services = () => {
  return (
    <div className="flex flex-col gap-y-16 justify-center text-center items-center my-14 text-secondary px-8 sm:px-16">
      <h1 className="font-semibold text-3xl">How To get Teepsee</h1>
      <div className="flex gap-5 justify-center items-center lg:flex-nowrap flex-wrap">
        <div className="bg-white rounded-xl py-10 w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center">
          <div className="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto">
            <img
              className="w-[126px]"
              src={exploreImage}
              alt="Explore Your Taste"
            />
            <h1 className="font-semibold text-xl">Explore Your Taste</h1>
            <p>
              HIT THE GET started icon to surf through various liquor options
            </p>
          </div>
        </div>
        <div className="bg-white w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center rounded-xl py-10">
          <div className="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto">
            <img className="w-[126px]" src={checkoutImage} alt="Checkout" />
            <h1 className="font-semibold text-xl">Checkout</h1>
            <p>Add to cart, check out and make payment</p>
          </div>
        </div>
        <div className="bg-white w-[320px] sm:w-[46%] h-[340px] flex justify-center items-center rounded-xl py-10">
          <div className="justify-center items-center text-center flex flex-col gap-y-4 max-w-[80%] mx-auto">
            <img className="w-[126px]" src={teepseeImage} alt="Get Teepsee" />
            <h1 className="font-semibold text-xl">Get Teepsee</h1>
            <p>Relax sit back and GET TEEPSEE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
