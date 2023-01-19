import Input from "../UI/Input";
import "./MealItemForm.css";
import React, { useContext } from 'react';
import CartContext from "../../store/CartContext";

const MealItemForm = (props) => {
  const ctx = useContext(CartContext);

  const addItemToCart = (evt) => {
    evt.preventDefault();
    ctx.onAddItem(evt, props.meal);
  };

  return (
    <form className="form">
      <Input
        label={"Количество"}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          step: "1",
          defaultValue: "1"
        }}
        addItemNumber={props.addItemNumber}
      />
      <button onClick={addItemToCart}>Добавить</button>
    </form>
  );
};

export default MealItemForm;
