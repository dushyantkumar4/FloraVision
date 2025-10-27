import React from "react";
import { Buttons } from "./Buttons";

interface LeftProp {
  title:string;
  desc:string;
  price:number;
  img:string;
}

const LeftTrandy: React.FC<LeftProp> = ({title,desc,price,img}) => {
  return (
    <div className="border-2 h-[32.875rem] rounded-[9.4375rem]  flex items-center  justify-between backdrop-blur-[40px] text-[#FFFFFF0D] p-6">
      {/* left section  */}
      <div className="h-[45.75rem] w-[37.56rem] flex items-baseline">
        <img src={img} alt="" className="w-full" />
      </div>

      {/* right section  */}
      <div className="flex flex-col gap-5">
        <h2 className="text-[#FFFFFF] text-[2.375rem] font-semibold">
          {title}
        </h2>
        <p className="text-[#FFFFFF] text-[1.25rem] font-semibold">
          {desc}
        </p>
        <p className="text-[#FFFFFF] text-[2.375rem] font-semibold">
          Rs. {price}/-
        </p>
        <Buttons/>
      </div>
    </div>
  );
};

export default LeftTrandy;
