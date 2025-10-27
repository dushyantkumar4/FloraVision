import React from "react";
import ReviewCard from "../components/ReviewCard";

const CustomerReview: React.FC = () => {
  return (
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
  );
};

export default CustomerReview;
