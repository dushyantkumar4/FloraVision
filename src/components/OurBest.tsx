import React from "react";
import { LeftBtn } from "./Buttons";

const OurBest: React.FC = () => {
  return (
    <div className="grid grid-cols-2 border border-t-[#FFFFFF45] border-b-[#FFFFFF54] border-x-[#FFFFFF54] backdrop-blur-[40px] rounded-4xl p-5 ">
      {/* left section  */}
      <img src="src\assets\flore_img_1.png" alt="" className="size-96" />
      {/* right section  */}
      <div className="flex flex-col gap-2 py-10">
        <div className="flex flex-col gap-5">
          <h2 className="text-[#FFFFFFBF] font-semibold text-xl 2xl:text-[2.375rem]">
            We Have Small And Best O2 Plants Collection's
          </h2>
          <p className="text-[#FFFFFFBF] font-semibold">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p className="text-[#FFFFFFBF] font-semibold">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <LeftBtn value="Explore" />
          <div className="flex items-center gap-5">
            <img
              src="src\assets\right_move.png"
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
              src="src\assets\right_move.png"
              alt=""
              className="size-4 2xl:size-6 opacity-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBest;
