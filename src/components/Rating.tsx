import React from "react";
import Star from "./Star";

interface RatingProps {
  name: string;
  rating: number;
  imgUrl: string;
  description: string;
}

const Rating: React.FC<RatingProps> = ({
  name,
  rating,
  imgUrl,
  description,
}) => {
  return (
    <div className="border text-[#FFFFFF0D] backdrop-blur-[17px] border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] flex flex-col gap-5 w-68 2xl:max-w-[25.5625rem] rounded-4xl 2xl:rounded-[2.8125rem] py-5 pl-5 pr-8 overflow-hidden">
      <div className="flex gap-4 items-center">
        <img src={imgUrl} alt="" className="2xl:size-16 size-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-[#FFFFFF] font-normal text-lg 2xl:text-[1.375rem]">
            {name}
          </span>
          <span className=""><Star rating={rating}/></span>
        </div>
      </div>
      <p className="text-[#FFFFFF] font-normal text-xs 2xl:text-base">{description}</p>
    </div>
  );
};

export default Rating;
