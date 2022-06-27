import React from "react";
import "./header.scss";
import "../style/button.scss";
import { FaPlus } from "react-icons/fa";

const Header = ({ onClickNew }) => (
  <header className="app__header">
    <div className="app__header-heading">
      Todo
    </div>
    <div className="app__header-action">
      <FaPlus
        className="app__button-black"
        size={32}
        onClick={onClickNew}
        title="Add"
      />
    </div>
  </header>
);

export default Header;
