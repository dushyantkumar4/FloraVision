import React from "react";
import { LeftBtn } from "./Buttons";
import move from "../assets/right_move.png";

interface IndorProf {
  imgUrl: string;
  type: string;
  title: string;
}

const IndorCard: React.FC<IndorProf> = ({ imgUrl, type, title }) => {
  return (
    <div className=" border items-center backdrop-blur-[15px] border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] rounded-4xl 2xl:rounded-[4.8125rem]  px-10">
      <div className="relative flex flex-col pt-35 py-12">
        <img src={imgUrl} alt="" className="absolute size-60 -top-29" />

        <div className="flex flex-col gap-2">
          <p className="text-[#FFFFFFBF]">{type} </p>
          <div className="flex justify-between! items-center gap-2">
            <h3 className="text-[#FFFFFFBF] text-2xl 2xl:text-[2.375rem]">
              {title}
            </h3>
            <img
              src={move}
              alt=""
              className="size-5 opacity-75"
            />
          </div>
          <LeftBtn value="Buy Now" />
        </div>
      </div>
    </div>
  );
};

export default IndorCard;
