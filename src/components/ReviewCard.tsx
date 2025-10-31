import React from "react";
import Star from "./Star";

interface ReviewProps {
  name: string;
  rating: number;
  imgUrl: string;
  description: string;
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  rating,
  imgUrl,
  description,
}) => {
  return (
    <div
      className="border h-auto w-auto bg-center p-10 rounded-4xl 2xl:rounded-[4.8125rem] overflow-hidden border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54]"
    >
      <div className="flex flex-col gap-10 ">
        <div className="flex gap-4 items-center">
          <img
            src={imgUrl}
            alt=""
            className="size-16 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[#FFFFFF] font-normal 2xl:text-[1.375rem]">
              {name}
            </span>
            <Star rating={rating}/>
          </div>
        </div>
        <p className="text-[#FFFFFF] font-normal text-xs 2xl:text-base ">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
