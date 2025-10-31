import React from "react";
import { Buttons } from "./Buttons";

interface RightProp {
  title: string;
  desc: string;
  price: number;
  img: string;
}

const RightTrandy: React.FC<RightProp> = ({ title, desc, price, img }) => {
  return (
    <div className="border-2 rounded-[6rem] 2xl:rounded-[9.4375rem] border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] flex items-center justify-between backdrop-blur-[40px] text-[#FFFFFF0D] py-16 px-6">
      <div className="grid grid-rows-2 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 items-center">
        {/* left section  */}
        <div className="flex flex-col gap-5 order-2 lg:order-1">
          <h2 className="text-[#FFFFFF] text-[1.7rem] 2xl:text-[2.375rem] font-semibold">
            {title}
          </h2>
          <p className="text-[#FFFFFF] 2xl:text-[1.25rem] font-semibold">{desc}</p>
          <p className="text-[#FFFFFF] text-[1.7rem] 2xl:text-[2.375rem] font-semibold">
            Rs. {price}/-
          </p>
          <Buttons />
        </div>

        {/* right section  */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <img src={img} alt="" className=" absolute size-96 lg:size-116 -bottom-29 lg:-bottom-45" />
        </div>
      </div>
    </div>
  );
};

export default RightTrandy;
