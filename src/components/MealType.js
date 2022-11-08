import React from "react";

const MealType = ({ name, count, handleIncrement }) => {
  const add = () => {
    handleIncrement(count + 1);
  };
  return (
    <div>
      <button onClick={add}>{name}</button>
      <p>{count}</p>
    </div>
  );
};

export default MealType;
