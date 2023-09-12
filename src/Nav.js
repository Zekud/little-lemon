import React from "react";
import logo from "./icons_assets/Logo.svg";

function Nav() {
  return (
    <nav>
      <div>
        <img src={logo} alt="little-lemon"></img>
      </div>
      <ul>
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#">ABOUT</a>
        </li>
        <li>
          <a href="#">MENU</a>
        </li>
        <li>
          <a href="#">RESERVATION</a>
        </li>
        <li>
          <a href="#">ORDER ONLINE</a>
        </li>
        <li>
          <a href="#">LOGIN</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
