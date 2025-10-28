import React from "react";
import { LeftBtn } from "./Buttons";

interface IndorProf {
  imgUrl: string;
  type: string;
  title: string;
}

const IndorCard: React.FC<IndorProf> = ({ imgUrl, type, title }) => {
  return (
    <div className="flex flex-col border items-center backdrop-blur-[15px] border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] rounded-[4.8125rem] overflow-hidden pb-9 pl-2 pr-1 max-w-[18rem]">
      <img src={imgUrl} alt="" className="size-[15rem]" />
      <div className="flex flex-col gap-2">
        <p className="text-[#FFFFFFBF]">{type} </p>
        <div className="flex justify-between items-center">
          <h3 className="text-[#FFFFFFBF] text-2xl 2xl:text-[2.375rem]">
            {title}
          </h3>
          <img
            src="src\assets\right_move.png"
            alt=""
            className="size-5 opacity-75"
          />
        </div>
        <LeftBtn value="Buy Now" />
      </div>
    </div>
  );
};

export default IndorCard;
