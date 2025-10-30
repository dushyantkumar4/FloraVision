import React from "react";
import Rating from "./Rating";
import { LeftBtn, MediaBtn } from "./Buttons";
import IndorCard from "./IndorCard";
import image from "../assets/flore_img_1.png";


const HeroSection: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-5 mt-5 w-full justify-between">
      {/* left section */}
      <div className="flex flex-col gap-10">
        <div className=" flex flex-col gap-2 py-10">
          <h1 className="text-[#FFFFFF] font-semibold text-[3.5rem] 2xl:text-[7.375rem]">Earth's Exhale</h1>
          <p className="text-[#FFFFFF] font-medium text-sm 2xl:text-[1.4375rem]">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
          <div className="flex items-center gap-4">
            <LeftBtn value={"Buy Now"}/>
            <MediaBtn/>
          </div>
        </div>
        <Rating
          name={"Ronnie Hamill"}
          rating={4.5}
          imgUrl={"src/assets/flora_reviewer_img.png"}
          description={
            "I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
          }
        />
      </div>
      {/* right section  */}
      <div className="place-self">
        <IndorCard imgUrl={image} type={"Indoor Plant "} title={"Aglaonema  plant"}/>
      </div>
    </div>
  );
};

export default HeroSection;
