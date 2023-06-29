import React from "react";
import "./feature.css";

const Feature = ({ title, text }) => {
  return (
    <div className="feature__container">
      <div className="feature__title">
        <hr />
        {title}
      </div>

      <div className="feature__text">{text}</div>
    </div>
  );
};

export default Feature;
