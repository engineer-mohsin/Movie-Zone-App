import React from "react";
import "../styles/ButtonComponent.css";

const ButtonComponent = ({ title, onclick }) => {
  return (
    <>
      <button onClick={onclick}>{title}</button>
    </>
  );
};

export default ButtonComponent;
