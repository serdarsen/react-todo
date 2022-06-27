import React from "react";
import "./item.scss";

const Item = ({ item, onClick }) => (
  <li title={item.message} onClick={() => onClick(item.id)} onKeyDown={() => {}} role="row" className={`${item.completed ? "app__item app__text-strikethrough" : "app__item"}`}>
    {item.message}
  </li>

);

export default Item;
