import React from "react";
import { Link } from "react-router-dom";
import wine from "@/img/wine.png";
import champagne from "@/img/champagne.png";
import vodka from "@/img/vodka.png";
import whiskey from "@/img/whiskey.png";
import combo from "@/img/combo.png";
import tequila from "@/img/tequila.png";
import cognac from "@/img/cognae.png";
import brandy from "@/img/brandy.png";
import vodkaMobile from "@/img/vodka-mobile.png";
import comboMobile from "@/img/combo-mobile.png";

const ProuctsCategory = () => {
  return (
    <div className="text-left flex flex-col gap-y-10 my-10 tracking-wider mx-5">
      <h1 className="text-secondary text-2xl font-semibold">Shop Now</h1>
      <div className="mx-auto flex flex-wrap gap-5 my-5 justify-center items-center lg:px-20">
        <Link
          to="/categories/champagne"
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        >
          <img src={wine} className="w-full" alt="Wine" />
        </Link>
        <Link
          to="/categories/champagne"
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        >
          <img src={champagne} className="w-full" alt="Champagne" />
        </Link>
        <Link
          className="rounded-xl w-full hidden md:block"
          to="/categories/vodka"
        >
          <img src={vodka} alt="Vodka" className="lg:w-[98%] mx-auto" />
        </Link>
        <Link
          className="rounded-xl w-full md:hidden block"
          to="/categories/vodka"
        >
          <img src={vodkaMobile} className="w-full" alt="Vodka Mobile" />
        </Link>
        <Link
          to="/categories/whiskey"
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        >
          <img src={whiskey} className="w-full" alt="Whiskey" />
        </Link>
        <Link
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
          to="/categories/brandy"
        >
          <img src={brandy} className="w-full" alt="Brandy" />
        </Link>
        <Link
          className="rounded-xl w-full hidden md:block"
          to="/categories/all"
        >
          <img
            src={combo}
            alt="Combo"
            className="lg:w-[98%] mx-auto rounded-lg"
          />
        </Link>
        <Link
          to="/categories/all"
          className="rounded-xl w-full md:hidden block"
        >
          <img src={comboMobile} className="w-full" alt="Combo Mobile" />
        </Link>
        <Link
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
          to="/categories/tequila"
        >
          <img src={tequila} className="w-full" alt="Tequila" />
        </Link>
        <Link
          to="/categories/cognac"
          className="rounded-xl md:w-[48%] lg:w-[48%] w-full"
        >
          <img src={cognac} className="w-full" alt="Cognac" />
        </Link>
      </div>
    </div>
  );
};

export default ProuctsCategory;
