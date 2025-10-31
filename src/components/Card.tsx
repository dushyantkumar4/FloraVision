import React from "react";
import { RightBtn } from "./Buttons";

interface CardProp {
  img: string;
  title: string;
  desc: string;
  price: string;
}

const Card: React.FC<CardProp> = ({ img, title, desc, price }) => {
  return (
    <div className="border border-2 border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] rounded-4xl 2xl:rounded-[4.8125rem]">
      <div className="relative flex flex-col items-center px-12 pb-8 pt-45">
        <img
          src={img}
          alt=""
          className="absolute -top-15 size-[14rem]  2xl:size-[28.6875]"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-[#FFFFFFBF] font-normal text-2xl 2xl:text-[2.375rem]">
            {title}
          </h2>
          <p className="text-[#FFFFFFBF] text-sm">{desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-[#FFFFFFBF] font-normal text-2xl 2xl:text-[2.375rem]">
              Rs. {price}/-
            </span>
            <RightBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
