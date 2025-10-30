import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="px-6 flex flex-col gap-10">
      {/* top secton */}
      <div className="grid grid-cols-3">
        {/* first  */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <img
              src={"src/assets/floralogo.png"}
              alt=""
              className=" size-[3rem] 2xl:size-[5.875rem]"
            />
            <span className="text-[2rem] 2xl:text-[2.8125rem] font-black text-[#FFFFFF] opacity-75">
              FloraVision.
            </span>
          </div>
          <span className="text-[#FFFFFF] font-medium text-[1.25rem]  2xl:text-[1.75rem]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </span>
        </div>
        {/* second */}
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-[#FFFFFF] text-[1.4rem] 2xl:text-[1.75rem] font-bold 2xl:font-extrabold">
            Quick Link's
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="text-[#FFFFFF] 2xl:text-[1.5rem] underline">Home</li>
            <li className="text-[#FFFFFF] 2xl:text-[1.5rem] underline">Type's Of plant's</li>
            <li className="text-[#FFFFFF] 2xl:text-[1.5rem] underline">Contact</li>
            <li className="text-[#FFFFFF] 2xl:text-[1.5rem] underline">Privacy</li>
          </ul>
        </div>
        {/* third */}
        <div className="flex flex-col  gap-5">
          <h3 className="text-[#FFFFFF] text-[1.4rem] 2xl:text-[1.75rem] font-bold 2xl:font-extrabold">
            For Every Update.
          </h3>
          <form>
            <div className="flex items-center justify-between border-2 border-[#FFFFFF] rounded-[0.5rem] py-0.5 pr-0.5 pl-3 max-w-80">
              <input
                type="text"
                className="border-none outline-none text-[#FFFFFFBF] 2xl:font-medium 2xl:text-[1.5rem]"
                placeholder="Enter Email"
              />
              <button className="text-[#000000] bg-[#FFFFFF] rounded py-1 px-5 font-medium 2xl:font-bold 2xl:text-[1.375rem]">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex items-center justify-between mb-10 py-5 pr-10">
        <div className="flex gap-10">
          <span className="text-[#FFFFFF] text-[1.2rem] 2xl:text-[1.75rem] font-extrabold">
            FB
          </span>
          <span className="text-[#FFFFFF] text-[1.2rem] 2xl:text-[1.75rem] font-extrabold">
            TW
          </span>
          <span className="text-[#FFFFFF] text-[1.2rem] 2xl:text-[1.75rem] font-extrabold">
            LI
          </span>
        </div>
        <span className="text-[#FFFFFF] font-medium 2xl:text-[1.5rem] pr-20">
          FloraVision © all right reserve
        </span>
      </div>
    </div>
  );
};

export default Footer;
