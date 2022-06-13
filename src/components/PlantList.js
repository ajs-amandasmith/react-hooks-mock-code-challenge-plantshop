import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const displayPlants = plants.map(plant => (
    <PlantCard 
      key={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  ))
  return (
    <ul className="cards">{displayPlants}</ul>
  );
}

export default PlantList;
