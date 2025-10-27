import React from "react";
import LeftTrandy from "./LeftTrandy";
import RightTrandy from "./RightTrandy";

const TrendyPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-[#FFFFFF] font-semibold text-[3.4375rem] text-center">
        Our Trendy plants
      </h2>
      <LeftTrandy
        img={"src/assets/second-plant.png"}
        title={"For Your Desks Decorations"}
        desc={
          "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
        }
        price={599}
      />
      <RightTrandy
        img={"src/assets/third-plant.png"}
        title={"For Your Desks Decorations"}
        desc={
          "The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
        }
        price={399}
      />
    </div>
  );
};

export default TrendyPage;
