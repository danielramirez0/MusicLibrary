import React from "react";
import "./button.css";
const Button = (props) => {
  return (
    <button className={props.classNames} type={props.type} onClick={() => props.buttonClick(props.mode)}>
      {props.text}
    </button>
  );
};

export default Button;
