import React from "react";
import { LeftBtn } from "./Buttons";
import move from "../assets/right_move.png";

interface OurBestProp {
  imgUrl:string;
  title:string;
  about:string;
  desc:string;
}

const OurBest: React.FC<OurBestProp> = ({imgUrl,title,about,desc}) => {
  return (
    <div className=" border border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] backdrop-blur-[40px] rounded-[4rem] 2xl:rounded-[5.75rem] py-10">
      <div className="grid grid-rows-2 sm:grid-rows-2 lg:grid-rows-1 lg:grid-cols-2">
        {/* left section  */}
        <div className="relative flex justify-center">
          <img
            src={imgUrl}
            alt=""
            className="absolute size-[20rem] lg:size-[28rem] -top-26 lg:-left-9"
          />
        </div>

        {/* right section  */}
        <div className="flex flex-col gap-2 lg:py-10 px-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-[#FFFFFFBF] font-semibold text-xl 2xl:text-[2.375rem]">
              {title}
            </h2>
            <p className="text-[#FFFFFFBF] font-semibold">
             {about}
            </p>
            <p className="text-[#FFFFFFBF] font-semibold">
              {desc}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <LeftBtn value="Explore" />
            <div className="flex items-center gap-5">
              <img
                src={move}
                alt=""
                className="size-4 2xl:size-6 opacity-35 rotate-180"
              />
              <span className="flex items-center">
                <span className="text-[#FFFFFFBF] font-bold 2xl:text-[1.25rem]">
                  01/
                </span>
                <span className="text-[#FFFFFFBF] font-bold text-sm">04</span>
              </span>
              <img
                src={move}
                alt=""
                className="size-4 2xl:size-6 opacity-75"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBest;
