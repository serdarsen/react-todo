import React from "react";
import Card from "./Card";
import Header from "./Header";
import List from "./List";
import "./mainCard.scss";

function MainCard({ items, onClickNew, deleteItem }) {
  return (
    <div className="app__maincard">
      <Card>
        <Header onClickNew={onClickNew} />
        <List items={items} deleteItem={deleteItem} />
      </Card>
    </div>
  );
}

export default MainCard;
