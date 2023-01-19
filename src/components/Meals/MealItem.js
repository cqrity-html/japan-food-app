import "./MealItem.css";
import MealItemForm from "./MealItemForm";
import { useState } from "react";

const MealItem = (props) => {
  const [addedItemCount, setAddedItemCount] = useState(props.amount);
  const addItemNumber = (number) => {
    setAddedItemCount(+number);
  };

  const getRandomInt = (min, max) => {
    return `m${Math.floor(Math.random() * (max - min)) + min}`;
  };

  const menuMeal = {
    id: getRandomInt(5, 10000000),
    name: props.name,
    price: props.price,
    amount: addedItemCount,
  };

  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          meal={menuMeal}
          addItemNumber={addItemNumber}
        />
      </div>
    </li>
  );
};

export default MealItem;
