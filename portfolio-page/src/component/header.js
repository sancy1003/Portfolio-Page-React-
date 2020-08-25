import React from "react";
import { NavLink } from "react-router-dom";

export default function header() {
  return (
    <ul className="main-header">
      <li className="main-header-item">
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      <li className="main-header-item">
        <NavLink activeClassName="active" exact to="/Profile">
          Profile
        </NavLink>
      </li>
      <li className="main-header-item">
        <NavLink activeClassName="active" exact to="/Portfolio">
          Portfolio
        </NavLink>
      </li>
      <li className="main-header-item">
        <NavLink activeClassName="active" exact to="/Contact">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}
