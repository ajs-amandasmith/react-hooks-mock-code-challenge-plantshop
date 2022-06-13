import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;

// I can search for plants by their name and see a filtered list of plants.

// Advanced Deliverables
// These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

// You'll have to add additional elements for these features. Feel free to style them however you see fit!

// Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

// As a user:

// I can update the price of a plant and still see the updated price after refreshing the page.
// I can delete a plant and it is still gone when I refresh the page.

// App
// |____ Header
// |____ PlantPage
//          |____ NewPlantForm
//          |____ Search
//          |____ PlantList
//                  |____ PlantCard