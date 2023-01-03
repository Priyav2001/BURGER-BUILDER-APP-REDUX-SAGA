import React from "react";
const OrderSummary = (props:any)=> {

  const ingredientSummary = Object.keys(props.ingredients).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span> :{" "}
        {props.ingredients[key]}
      </li>
    );
  });
  return (
    <>
      <h3>Your Order Summary</h3>
      <p>Ordered ingredients :</p>
      <ul>{ingredientSummary}</ul>

        <span style={{ fontWeight: "800" }}>Total Price is: Rs. {props.price.toFixed(2)}</span>

    </>
  );
};

export default OrderSummary;
