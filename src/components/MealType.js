import React from "react";

const MealType = ({ name, count, handleIncrement }) => {
  const add = () => {
    handleIncrement(count + 1);
  };
  return (
    <div className="meal-type">
      <button onClick={add} className="meal-button">{name}</button>
      <p>{count}</p>
    </div>
  );
};

export default MealType;
