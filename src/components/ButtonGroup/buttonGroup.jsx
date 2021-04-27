import React from "react";
import Button from "../Button/button";
import "./buttonGroup.css";

const ButtonGroup = (props) => {
  return (
    <div className="btn-group">
      <Button classNames="btn btn-dark" type="button" text="Display All Music" buttonClick={props.toggleTable} mode="on" />
      <Button classNames="btn btn-dark" type="button" text="Add Record" buttonClick={props.toggleForm} mode={null} />
      <Button classNames="btn btn-dark" type="button" text="Reset" buttonClick={props.resetUI} mode={null} />
    </div>
  );
};

export default ButtonGroup;
