import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarProp {
  rating: number;
  size: string;
}

const Star: React.FC<StarProp> = ({ rating, size }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - Math.ceil(rating);
  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} className={`text-[#FFF84E] size-[${size}]`} />
      ))}
      {hasHalfStar && (
        <FaStarHalfAlt key="half" className={`text-[#FFF84E] size-[${size}]`} />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} className={`text-[#FFF84E] size-[${size}]`} />
      ))}
    </div>
  );
};

export default Star;
