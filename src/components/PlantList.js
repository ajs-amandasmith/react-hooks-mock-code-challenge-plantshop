import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {
  const displayPlants = plants.filter(plant => {
    if (search === '') return true;
    return plant.name.toLowerCase().includes(search.toLowerCase())
  }).map(plant => (
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
