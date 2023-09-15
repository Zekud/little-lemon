import React from "react";
import logo from "./icons_assets/Logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <aside id="fifth-aside">
        <img src={logo} alt="little-lemon"></img>
      </aside>
      <aside id="sixth-aside">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/chicago">ABOUT</Link>
          </li>
          <li>
            <Link to="/menu">MENU</Link>
          </li>
          <li>
            <Link to="/booking-page">RESERVATION</Link>
          </li>
          <li>
            <Link to="/booking-page">ORDER ONLINE</Link>
          </li>
          <li>
            <Link to="/LOGIN">LOGIN</Link>
          </li>
        </ul>
      </aside>
      <aside id="seventh-aside">
        <h4>Contact</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>email Address</li>
        </ul>
      </aside>
      <aside id="eighth-aside">
        <h4>Social Media Links</h4>
        <ul>
          <li>Address</li>
          <li>Phone number</li>
          <li>email Address</li>
        </ul>
      </aside>
    </footer>
  );
}

export default Footer;
