import React from "react";
import Rating from "./Rating";
import { LeftBtn, MediaBtn } from "./Buttons";


const HeroSection: React.FC = () => {
  return (
    <div>
      {/* left section */}
      <div className="flex flex-col gap-30">
        <div >
          <h1 className="text-[#FFFFFF] font-semibold text-[7.375rem]">Earth's Exhale</h1>
          <p className="text-[#FFFFFF] font-medium text-[1.4375rem]">"Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.</p>
          <div className="flex gap-4">
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
      <div></div>
    </div>
  );
};

export default HeroSection;
