import React from "react";
import "./card.scss";

const Card = ({ children }) => (
  <div className="app__card">
    {children}
  </div>
);

export default Card;
