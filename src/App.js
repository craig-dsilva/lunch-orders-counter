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

  useEffect(() => {
    const addTotal = () => {
      setTotal(vegetarian + vegan + halal + glutenFree + anything);
    };
    addTotal();
  }, [vegetarian, vegan, halal, glutenFree, anything]);

  const clearTotal = () => {
    setVegetarian(0);
    setVegan(0);
    setHalal(0);
    setGlutenFree(0);
    setAnything(0);
    setTotal(0);
  };

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
        <MealType name="Halal" count={halal} handleIncrement={setHalal} />
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
        <button onClick={clearTotal}>Reset</button>
      </div>
    </div>
  );
};

export default App;
