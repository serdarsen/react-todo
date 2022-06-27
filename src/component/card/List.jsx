import React from "react";
import "./list.scss";
import Item from "./Item";

const List = ({ items, onClickRow }) => (
  <ul className="app__list">
    {items.map((item) => <Item key={item.id} item={item} onClick={onClickRow} />)}
  </ul>
);

export default List;
