import React from "react";
import "./item.scss";

function Item({ item }) {
  return (
    <li className={`${item.completed ? "app__item app__item-completed" : "app__item"}`}>
      {item.message}
    </li>

  );
}

export default Item;
