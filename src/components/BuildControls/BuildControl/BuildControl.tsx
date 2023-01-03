import React from "react";
import {Button} from "antd";
import "./BuildControl.css";

const BuildControl = (props:any) => (
  <div className={"BuildControl"}>

    {props.label === "Salad" && (
      <p className="text">Salad</p>

    )}
    {props.label === "Sauce" && (
      <p className="text">Sauce</p>

    )}
    {props.label === "Meat" && (
      <p className="text">Meat</p>

    )}
    {props.label === "Cheese" && (
      <p className="text">Cheese</p>
      // <img
      //   src={cheese}
      //   alt="cheese"
      //   style={{
      //     width: "130px",
      //     height: "130px",
      //   }}
      // />
    )}
    <Button
      danger
      className={"Less"}
      onClick={props.onRemove}
      disabled={props.disabled}
    >
      Less
    </Button>
    <Button className={"More"} onClick={props.onAdd}>
      More
    </Button>
  </div>
);

export default BuildControl;
