import React from "react";
import img from "./icons_assets/restauranfood.jpg";

function Header() {
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
        <button id="first-btn">Reserve a Table</button>
      </aside>
      <aside id="second-aside">
        <img src={img} />
      </aside>
    </header>
  );
}

export default Header;
