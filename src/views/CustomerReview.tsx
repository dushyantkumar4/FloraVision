import React from "react";
import ReviewCard from "../components/ReviewCard";
import Title from "../components/Title";

const CustomerReview: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 pr-8 pl-10 py-10">
      <Title title={"Customer Review"}/>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-8">
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
