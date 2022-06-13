import React, { useState } from "react";

function NewPlantForm({ submitNewPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  })

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(r => r.json())
      .then(() => submitNewPlant(formData))
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="name" 
          id="name"
          placeholder="Plant name" 
          onChange={handleChange} 
          value={formData.name} 
        />
        <input 
          type="text" 
          name="image" 
          id="image"
          placeholder="Image URL" 
          onChange={handleChange}
          value={formData.image}
        />
        <input 
          type="number"  
          name="price" 
          id="price"
          step="0.01" 
          placeholder="Price" 
          onChange={handleChange}
          value={formData.price} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
