import React from "react";

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
    <div className="border text-[#FFFFFF0D] backdrop-blur-[17px]  flex flex-col gap-5 max-w-[25.5625rem] rounded-[2.8125rem] p-5">
      <div className="flex gap-4 items-center">
        <img src={imgUrl} alt="" className="size-16 rounded-full object-cover" />
        <div className="flex flex-col">
          <span className="text-[#FFFFFF] font-normal text-[1.375rem]">
            {name}
          </span>
          <span className="">{rating}</span>
        </div>
      </div>
      <p className="text-[#FFFFFF] font-normal text-base ">{description}</p>
    </div>
  );
};

export default Rating;
