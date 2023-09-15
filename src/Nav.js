import React from "react";
import logo from "./icons_assets/Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <div>
        <img src={logo} alt="little-lemon"></img>
      </div>
      <ul>
        <li>
          <Link to="/" className="nav-item">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/chicago" className="nav-item">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/menu" className="nav-item">
            MENU
          </Link>
        </li>
        <li>
          <Link to="/booking-page" className="nav-item">
            RESERVATION
          </Link>
        </li>
        <li>
          <Link to="/booking-page" className="nav-item">
            ORDER ONLINE
          </Link>
        </li>
        <li>
          <Link to="/LOGIN" className="nav-item">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
