import React from "react";
import "../CSS/loader.css";

const Loader = ({ step, text }) => {
  const getProgress = () => {
    switch (step) {
      case 1:
        return "33%";
      case 2:
        return "66%";
      case 3:
        return "100%";
      default:
        return "0%";
    }
  };

  return (
    <div className="loader-container">
      <h2>{text}</h2>
      <div className="loader-bar" style={{ width: getProgress() }}></div>
      <p>Step {step} of 3</p>
    </div>
  );
};

export default Loader;
