import React, { useState } from "react";
import logo from "../assets/floralogo.png";
import search from "../assets/flora search.png"
import cart from "../assets/add to card.png"

const Navbar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(true);

  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-1">
        <img
          src={logo}
          alt=""
          className="size-8 2xl:size-12"
        />
        <span className="text-[1.3rem] 2xl:text-[1.75rem] font-black text-[#FFFFFF] opacity-75">
          FloraVision.
        </span>
      </div>
      <div className="flex items-center">
        {showMenu && (
          <ul className="flex flex-col sm:flex-col lg:flex-row gap-5 ">
            <li className="customeFont text-[#FFFFFF] 2xl:text-2xl font-normal font-[Indie_Flower]">
              Home
            </li>
            <li className="customeFont text-[#FFFFFF] 2xl:text-2xl font-normal font-[Indie_Flower]">
              Plants Type
            </li>
            <li className="customeFont text-[#FFFFFF] 2xl:text-2xl font-normal font-[Indie_Flower]">
              More
            </li>
            <li className="customeFont text-[#FFFFFF] 2xl:text-2xl font-normal font-[Indie_Flower]">
              Contact
            </li>
          </ul>
        )}
      </div>
      <div className="flex items-center gap-5">
        <img
          src={search}
          alt=""
          className="size-4 2xl:size-6.5"
        />
        <img
          src={cart}
          alt=""
          className="size-4 2xl:size-6.5"
        />
        <button
          className="flex flex-col items-end gap-2 justify-center border-none bg-none  lg:pointer-events-none lg:cursor-not-allowed"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="w-7.75 border border-[#FFFFFF]"></span>
          <span className="w-5.75 border border-[#FFFFFF]"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
