import React from "react";
import TrendyPage from "../components/TrendyPage";
import HeroSection from "../components/HeroSection";


const LendingPage: React.FC = () => {
  return (
    <>
      <div className="w-full px-6 bg-[url('src/assets/florabgimage.jpg')] bg-no-repeat bg-auto bg-center h-full flex flex-col gap-10">
        <HeroSection />
        <TrendyPage />
      </div>
    </>
  );
};

export default LendingPage;
