import React from "react";
import logo from "../icons_assets/footer logo.png";
import { NavLink } from "react-router-dom";

function Footer() {
  const menu = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/menu",
      name: "Menu",
    },
    {
      path: "/booking-page",
      name: "Reservation",
    },
    {
      path: "/order-online",
      name: "Order Online",
    },
    {
      path: "/login",
      name: "Login",
    },
  ];
  return (
    <footer>
      <aside id="fifth-aside">
        <img src={logo} alt="little-lemon"></img>
      </aside>
      <aside id="sixth-aside">
        <ul>
          {menu.map((element) => {
            return (
              <li key={element.name}>
                {" "}
                <NavLink
                  to={element.path}
                  activeClassName="footer-acitve"
                  className="footer-nav"
                >
                  {element.name}
                </NavLink>{" "}
              </li>
            );
          })}
        </ul>
      </aside>
      <aside id="seventh-aside">
        <h4>Contact Us</h4>
        <ul>
          <li>Phone: 555-555-5555</li>
          <li>Email: info@littlelemontable.com</li>
          <li>Address: 123 Main St, Anytown USA</li>
        </ul>
      </aside>
      <aside id="eighth-aside">
        <h4>Follow Us</h4>
        <ul>
          <li>
            <a href="">
              <i className="fa-brands fa-facebook-f fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-x-twitter fa-xl"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="fa-brands fa-instagram fa-xl"></i>
            </a>
          </li>
        </ul>
      </aside>
    </footer>
  );
}

export default Footer;
