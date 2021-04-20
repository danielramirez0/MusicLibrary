import React from "react";
import "./buttonGroup.css";
import Button from "../Button/button";

const ButtonGroup = (props) => {
  return (
    <div className="btn-group">
      <Button type="button" text="Display All Music" buttonClick={props.buttonClick} mode="on" />
      <Button type="button" text="Reset" buttonClick={props.buttonClick} mode="off" />
    </div>
  );
};

export default ButtonGroup;
