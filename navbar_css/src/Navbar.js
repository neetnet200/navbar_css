import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header className="header">
        <div className="logotype">neetnet.io</div>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label class="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <NavLink className="navlink" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/Services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/Portfolio">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Navbar;
