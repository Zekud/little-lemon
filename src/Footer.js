import React from "react";
import logo from "./icons_assets/Logo.svg";

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
