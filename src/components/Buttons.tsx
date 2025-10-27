import React from "react";

interface BtnProp {
  value: string;
}

const MediaBtn = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="border-2 border-[#FFFFFF] rounded-full flex justify-center items-center py-2 px-4">
        <i className="fa-solid fa-play text-[#FFFFFF] opacity-75 size-[2.125rem] !flex !justify-center !items-center"></i>
      </div>
      <span className="text-[1.5625rem] text-[#FFFFFF]">Live Demo...</span>
    </div>
  );
};

const LeftBtn: React.FC<BtnProp> = ({ value }) => {
  return (
    <div>
      <button className="border-2 border-[#CCCCCC] text-center py-1 px-5 rounded-lg text-[#FFFFFF] font-medium text-[1.75rem]">
        {value}
      </button>
    </div>
  );
};
const RightBtn: React.FC = () => {
  return (
    <div>
      <button className="border-2 border-[#CCCCCC] text-center p-2 rounded-lg">
        <img
          src={"src/assets/add to card.png"}
          alt=""
          className="size-[2.125rem]"
        />
      </button>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex gap-3 items-center">
      <LeftBtn value={"Explore"} />
      <RightBtn />
    </div>
  );
};

export { Buttons, LeftBtn, RightBtn, MediaBtn };
