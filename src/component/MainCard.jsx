import React from "react";
import Card from "./Card";
import Header from "./Header";
import List from "./List";
import "./mainCard.scss";

function MainCard({ items }) {
  return (
    <div className="app__maincard">
      <Card>
        <Header />
        <List items={items} />
      </Card>
    </div>
  );
}

export default MainCard;
