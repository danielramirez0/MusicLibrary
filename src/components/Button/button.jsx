import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <button className="btn btn-dark" type={props.type} onClick={props.buttonClick}>
      {props.text}
    </button>
  );
};

export default Button;
