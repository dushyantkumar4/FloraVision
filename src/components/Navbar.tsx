import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5">
      <div className="flex items-center gap-1">
        <img src={"src/assets/floralogo.png"} alt="" className="size-10 2xl:size-12" />
        <span className="text-[1.5rem] 2xl:text-[1.75rem] font-black text-[#FFFFFF] opacity-75">
          FloraVision.
        </span>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-5 ">
          <li className="text-[#FFFFFF] text-2xl font-normal font-[Indie_Flower]">
            Home
          </li>
          <li className="text-[#FFFFFF] text-2xl font-normal font-[Indie_Flower]">
            Plants Type
          </li>
          <li className="text-[#FFFFFF] text-2xl font-normal font-[Indie_Flower]">
            More
          </li>
          <li className="text-[#FFFFFF] text-2xl font-normal font-[Indie_Flower]">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-5">
        <img
          src={"src/assets/flora search.png"}
          alt=""
          className="size-[1.625rem] "
        />
        <img
          src={"src/assets/add to card.png"}
          alt=""
          className="size-[1.625rem] "
        />
        <button className="flex flex-col items-end gap-2 justify-center border-none bg-none">
          <span className="w-[1.9375rem] border border-[#FFFFFF]"></span>
          <span className="w-[1.4375rem] border border-[#FFFFFF]"></span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
