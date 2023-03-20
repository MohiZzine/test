import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input type={props.type} value={props.value} className={props.className} />
  );
};

export default Button;
