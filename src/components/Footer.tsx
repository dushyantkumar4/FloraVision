import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="px-6 flex flex-col gap-10">
      {/* top secton */}
      <div className="flex items-start justify-between">
        {/* first  */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-1">
            <img
              src={"src/assets/floralogo.png"}
              alt=""
              className="size-[5.875rem]"
            />
            <span className="text-[2.8125rem] font-black text-[#FFFFFF]">
              FloraVision.
            </span>
          </div>
          <span className="text-[#FFFFFF] font-medium text-[1.75rem]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </span>
        </div>
        {/* second */}
        <div>
          <h3 className="text-[#FFFFFF] text-[1.75rem] font-extrabold">
            Quick Link's
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="text-[#FFFFFF] text-[1.5rem] underline">Home</li>
            <li className="text-[#FFFFFF] text-[1.5rem] underline">Type's Of plant's</li>
            <li className="text-[#FFFFFF] text-[1.5rem] underline">Contact</li>
            <li className="text-[#FFFFFF] text-[1.5rem] underline">Privacy</li>
          </ul>
        </div>
        {/* third */}
        <div>
          <h3 className="text-[#FFFFFF] text-[1.75rem] font-extrabold">
            For Every Update.
          </h3>
          <form>
            <div className="flex border-2 border-[#FFFFFF] rounded-[0.5rem] py-0.5 pr-0.5 pl-3 w-auto max-w-[35.125rem]">
              <input
                type="text"
                className="border-none outline-none text-[#FFFFFFBF] font-medium text-[1.5rem]"
                placeholder="Enter Email"
              />
              <button className="text-[#000000] bg-[#FFFFFF] rounded-[0.5rem] py-1 px-5 font-bold text-[1.375rem]">
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* bottom section */}
      <div className="flex items-center justify-between">
        <div className="flex gap-10">
          <span className="text-[#FFFFFF] text-[1.75rem] font-extrabold">
            FB
          </span>
          <span className="text-[#FFFFFF] text-[1.75rem] font-extrabold">
            TW
          </span>
          <span className="text-[#FFFFFF] text-[1.75rem] font-extrabold">
            LI
          </span>
        </div>
        <span className="text-[#FFFFFF] font-medium text-[1.5rem]">
          FloraVision © all right reserve
        </span>
      </div>
    </div>
  );
};

export default Footer;
