import React from "react";

import BurgerIngredient from "./Ingredient/Ingredient";
import "./Burger.css";

const Burger = (props:any) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(item => {
      return [...Array(props.ingredients[item])].map((emptyStr, index) => {
        return <BurgerIngredient key={item + index} type={item}/>;
      });
    })
    .reduce((arr, currArr) => {
      return arr.concat(currArr);
    }, []);


  if (transformedIngredients.length === 0) {
    (transformedIngredients as any) = <p>Please add the ingredients</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default Burger;
