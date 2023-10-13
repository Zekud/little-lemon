import React from "react";
import { useNavigate } from "react-router-dom";
import img from "./icons_assets/restauranfood.jpg";

function Header() {
  const navigate = useNavigate();
  return (
    <header>
      <aside id="first-aside">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          molestias recusandae natus amet iste repellendus culpa dolorum
          doloremque molestiae temporibus, minus nisi fugiat maiores. Natus
          animi dignissimos cumque doloribus eos!
        </p>
        <button
          id="first-btn"
          onClick={() => {
            navigate("/booking-page");
          }}
        >
          Reserve a Table
        </button>
      </aside>
      <aside id="second-aside">
        <img src={img} alt="delicious food" />
      </aside>
    </header>
  );
}

export default Header;
