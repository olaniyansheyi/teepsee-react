import React from "react";
import HeroHeader from "@/components/HeroHeader";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-4 px-6 md:px-10 h-[400px] sm:h-[500px] lg:h-[700px] bg-heroImg bg-cover bg-center bg-no-repeat">
      <HeroHeader />
      <div className="w-full h-full flex justify-start items-center text-white">
        <div className="tracking-wide z-10">
          <h1 className="sm:text-6xl text-4xl font-semibold">Get Teepsee</h1>
          <p className="font-normal mt-2 md:mt-4 text-md">
            Wine, Liquor, Ice, Mixers and some other cool stuff? We got it.
          </p>
          <NavLink to="/categories/all">
            <button className="bg-white border-none py-2 px-8 text-black rounded-lg mt-4 md:mt-5 font-semibold">
              Get Started
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
