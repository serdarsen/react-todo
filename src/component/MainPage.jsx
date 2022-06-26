import React, { useState } from "react";
import MainCard from "./MainCard";
import "./mainPage.scss";

function MainPage() {
  const [items] = useState([{ message: "Item 1", completed: false }, { message: "Item 2", completed: false }, { message: "Item 3", completed: true }]);

  return <MainCard items={items} />;
}

export default MainPage;
