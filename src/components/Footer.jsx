import React from "react";
import footerImgAbsolute from "@/img/footerImgAbsolute.png";
import teepseeLogo from "@/img/teepseeLogo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-16 px-6 md:px-16 bg-secondary gap-y-5 tracking-wider text-white relative text-left w-full">
      <img
        src={footerImgAbsolute}
        className="z-[1] absolute top-[-10%] right-0"
        alt=""
      />
      <div className="md:w-[80%] w-full">
        <h1 className="text-2xl z-[2]">
          We believe in the power of freedom.. so get teepsee.
        </h1>
        <img src={teepseeLogo} className="my-8 w-[80px]" alt="" />
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className="md:w-1/3">
            <h1 className="text-lg">LEGAL</h1>
            <div className="mt-5">
              <p className="mt-2">Private policy</p>
              <p className="mt-2">Terms & Conditions</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <h1 className="text-lg">ABOUT US</h1>
            <div className="mt-5">
              <p className="mt-2">About us</p>
              <p className="mt-2">Features</p>
            </div>
          </div>
          <div className="md:w-1/3">
            <h1 className="text-lg">SUPPORT</h1>
            <div className="mt-5">
              <NavLink to="/faq" className="mt-2">
                F.A.Q
              </NavLink>
              <p className="mt-2">Live chat</p>
              <NavLink to="/track-order" className="mt-2">
                Track
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="grey-black border-[1px] border-white rounded-xl w-full flex justify-between items-center px-4 mt-16 py-4 font-light">
        <p>2024. ALL RIGHTS RESERVED.</p>
        <p>Contact Us: 08176678996</p>
      </div>
    </div>
  );
};

export default Footer;
