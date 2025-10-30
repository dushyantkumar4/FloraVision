import React from "react";
import Card from "../components/Card";

const Cards: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 pr-8 pl-10 py-10">
      <h1 className="text-[#FFFFFF] text-[2rem] 2xl:text-[3.43rem]">
        Our Top Selling Plants
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Cards;
