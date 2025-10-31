import React from "react";
import Card from "../components/Card";
import Title from "../components/Title";

const Cards: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 pr-8 pl-10 py-10">
      <Title title="Our Top Selling Plants" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-29">
        <Card img="src\assets\flore_img_1.png" title="Aglaonema plant" desc="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care" price="300" />
        <Card img="src\assets\second-plant.png" title="Plantain Lilies" desc="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes," price="380" />
        <Card img="src\assets\plant_4.png" title="Cactus" desc="It is known for their ability to thrive in arid environments" price="259" />
        <Card img="src\assets\plant_5.png" title="Swiss cheese Plant" desc="It is a popular tropical houseplant known for its distinctive, perforated leaves" price="400" />
        <Card img="src\assets\plant_6.png" title="Sansevieria plant" desc="It is a popular indoor plant admired for its striking appearance and low-maintenance nature." price="450" />
        <Card img="src\assets\plant_7.png" title="Agave plant" desc="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms." price="359" />
      </div>
    </div>
  );
};

export default Cards;
