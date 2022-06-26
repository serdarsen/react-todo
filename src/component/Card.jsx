import React from "react";
import "./card.scss";

function Card({ children }) {
  return (
    <div className="app__card">
      {children}
    </div>
  );
}

export default Card;
