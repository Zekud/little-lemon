import React from "react";
import owners from "./icons_assets/Mario and Adrian A.jpg";

function Chicago() {
  return (
    <section id="about">
      <h1>About</h1>
      <section id="about-1">
        <aside id="third-aside">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestias recusandae natus amet iste repellendus culpa dolorum
            doloremque molestiae temporibus, minus nisi fugiat maiores. Natus
            animi dignissimos cumque doloribus eos!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Deserunt ab dicta hic vero beatae
            voluptatibus aut similique accusantium, reiciendis nostrum, aliquid
            quisquam voluptatem quam cupiditate. Mollitia deserunt autem
            distinctio laboriosam?
          </p>
        </aside>
        <aside id="fourth-aside">
          <img src={owners} alt="Owners" />
        </aside>
      </section>
    </section>
  );
}

export default Chicago;
