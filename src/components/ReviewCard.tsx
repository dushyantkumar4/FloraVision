import React from "react";
import bgUrl from "../assets/svg/review_card.svg";
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
      className=" bg-no-repeat bg-cover  h-auto w-auto bg-center p-8 rounded-4xl 2xl:rounded-[4.8125rem] overflow-hidden"
      style={{
        backgroundImage: `url(${bgUrl})`,
      }}
    >
      <div className="">
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
            <Star rating={rating} size={"3"}/>
          </div>
        </div>
        <p className="text-[#FFFFFF] font-normal text-xs 2xl:text-base ">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
