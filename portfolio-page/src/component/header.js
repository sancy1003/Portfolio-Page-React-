import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  //const item = document.querySelector(".main-header-item");

  //const disableClick = () => {};
  return (
    <ul className="main-header">
      <li className="main-header-item">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="main-header-item">
        <NavLink activeClassName="active" to="/Profile">
          Profile
        </NavLink>
      </li>
      <li className="main-header-item">
        <NavLink activeClassName="active" to="/Portfolio">
          Portfolio
        </NavLink>
      </li>
    </ul>
  );
}
