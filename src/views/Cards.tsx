import React from "react";
import Card from "../components/Card";

const Cards: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Cards;
