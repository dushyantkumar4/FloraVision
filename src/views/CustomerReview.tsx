import React from "react";
import ReviewCard from "../components/ReviewCard";

const CustomerReview: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 pr-8 pl-10 py-10">
      <h1 className="text-[#FFFFFF] text-[2rem] 2xl:text-[3.43rem]">Customer Review</h1>
      <div className="grid grid-cols-3 gap-4">
        <ReviewCard
          name={"Shelly Russel"}
          rating={4.5}
          imgUrl={"src/assets/flora_reviewer_img.png"}
          description={
            "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
          }
        />
        <ReviewCard
          name={"Shelly Russel"}
          rating={4.5}
          imgUrl={"src/assets/flora_reviewer_img.png"}
          description={
            "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
          }
        />
        <ReviewCard
          name={"Shelly Russel"}
          rating={4.5}
          imgUrl={"src/assets/flora_reviewer_img.png"}
          description={
            "Just got my hands on some absolutely awesome plants, and I couldn’t be happier!"
          }
        />
      </div>
    </div>
  );
};

export default CustomerReview;
