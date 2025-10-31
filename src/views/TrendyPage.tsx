import React from "react";
import LeftTrandy from "../components/LeftTrandy";
import RightTrandy from "../components/RightTrandy";
import Title from "../components/Title";
import plan2 from "../assets/second-plant.png";
import plant3 from "../assets/third-plant.png";

const TrendyPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-25 py-10">
      <Title title="Our Trendy plants"/>
      <LeftTrandy
        img={plan2}
        title={"For Your Desks Decorations"}
        desc={
          "I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
        }
        price={599}
      />
      <RightTrandy
        img={plant3}
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
