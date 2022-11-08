import React, { useState, useEffect } from "react";
import MealType from "./components/MealType";
import Total from "./components/Total";

import "./App.css";

const App = () => {
  const [vegetarian, setVegetarian] = useState(0);
  const [vegan, setVegan] = useState(0);
  const [halal, setHalal] = useState(0);
  const [glutenFree, setGlutenFree] = useState(0);
  const [anything, setAnything] = useState(0);
  const [total, setTotal] = useState(0);

  const addTotal = () => {
    setTotal(vegetarian + vegan + halal + glutenFree + anything);
  };

  useEffect(() => {
    addTotal();
  }, [vegetarian, vegan, halal, glutenFree, anything]);

  return (
    <div className="App">
      <h1>Meal Counts</h1>
      <div className="meal-container">
        <MealType
          name="Vegetarian"
          count={vegetarian}
          handleIncrement={setVegetarian}
        />
        <MealType name="Vegan" count={vegan} handleIncrement={setVegan} />
        <MealType name="halal" count={halal} handleIncrement={setHalal} />
        <MealType
          name="Gluten-free"
          count={glutenFree}
          handleIncrement={setGlutenFree}
        />
        <MealType
          name="Anything!"
          count={anything}
          handleIncrement={setAnything}
        />
        <Total total={total} />
      </div>
    </div>
  );
};

export default App;
