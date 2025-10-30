import React from "react";
import { RightBtn } from "./Buttons";
import imgUrl from "../assets/svg/card_bg.svg";

const Card: React.FC = () => {
  return (
    <div className="border-none flex items-end ">
      <div
        className="flex flex-col items-center  object-fill bg-center rounded-[4.8125rem]"
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      >
        <img
          src="src\assets\flore_img_1.png"
          alt=""
          className="sm:size-[6rem] xl:size-[10.6875rem]"
        />
        <div>
          <h2 className="text-[#FFFFFFBF] font-normal xl-text-[2.375rem]">
            Aglaonema plant
          </h2>
          <p className="text-[#FFFFFFBF] text-[10px]">
            The Aglaonema plant, commonly known as Chinese Evergreen known for
            its attractive foliage and ease of care
          </p>
          <div className="flex items-center justify-between">
            <span className="text-[#FFFFFFBF] text-xs">Rs. 300/-</span>
            <RightBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
