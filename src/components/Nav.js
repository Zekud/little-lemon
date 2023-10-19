import React from "react";
import logo from "../icons_assets/Logo.svg";
import { NavLink } from "react-router-dom";

function Nav() {
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
    <nav>
      <div>
        <img src={logo} alt="little-lemon" />
      </div>
      <ul>
        {menu.map((element) => {
          return (
            <li key={element.name}>
              {" "}
              <NavLink
                to={element.path}
                activeClassName="active"
                exact={element.path == "/"}
                className="nav-item"
              >
                {element.name}
              </NavLink>{" "}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
