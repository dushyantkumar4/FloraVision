import React from "react";
import OurBest from "../components/OurBest";
import Title from "../components/Title";
import img from "../assets/flore_img_1.png";

const OurBests: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 pr-8 pl-10 py-10">
      <Title title={"Our Best o2"} />
      <OurBest
        imgUrl={img}
        title="We Have Small And Best O2 Plants Collection's"
        about='Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.'
        desc="Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe."
      />
    </div>
  );
};

export default OurBests;
