import React from "react";
import PromoText from "./PromoText";
import MealsList from "./MealList";

const Meals = (props) => {
  return (
    <React.Fragment>
      <PromoText />
      <MealsList />
    </React.Fragment>
  );
};

export default Meals;
