import React from "react";
import owners from "../icons_assets/Mario and Adrian A.jpg";
import owners2 from "../icons_assets/Mario and Adrian b.jpg";

function ABOUT() {
  return (
    <section id="about">
      <h1>About us</h1>
      <section id="about-1">
        <aside id="third-aside">
          <div>
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>
            Little Lemon is a charming neighbourhood bistro that serves simple
            food and classic cocktails in a lively but casual environment.The
            restaurant features a locally-served menu with daily specials.
          </p>
        </aside>
        <aside id="fourth-aside">
          <img src={owners} alt="Owners" />
          <img src={owners2} alt="Owners" />
        </aside>
      </section>
    </section>
  );
}

export default ABOUT;
