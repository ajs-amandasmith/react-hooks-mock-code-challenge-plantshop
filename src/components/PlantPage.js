import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(plantsData => setPlants(plantsData))
    }, 
    []
  )

  function submitNewPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  return (
    <main>
      <NewPlantForm submitNewPlant={submitNewPlant} />
      <Search search={search} handleSearch={handleSearch} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
