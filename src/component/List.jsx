import React from "react";
import "./list.scss";
import Item from "./Item";

function List({ items }) {
  return (
    <ul className="app__list">
      {items.map((item) => <Item item={item} />)}
    </ul>
  );
}

export default List;
