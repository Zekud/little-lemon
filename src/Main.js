import React from "react";
import salad from "./icons_assets/greek salad.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";
import cream from "./icons_assets/lemon dessert.jpg";
import owners from "./icons_assets/Mario and Adrian A.jpg";

function Main() {
  return (
    <main>
      <section id="first-sec">
        <div id="sec-div">
          <h1>This Week's Specials!</h1>
          <button id="second-btn">Online Menu</button>
        </div>
      </section>
      <section id="second-sec">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100">
              <img src={salad} class="card-img-top" alt="..." />
              <div class="card-body">
                <div id="card-title-div">
                  <h4 class="card-title">Greek Salad</h4>
                  <h5 class="card-title">$12.99</h5>
                </div>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <h5>Order and delivery</h5>
                <h5>+$2.00</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={bruchetta} class="card-img-top" alt="..." />
              <div class="card-body">
                <div id="card-title-div">
                  <h4 class="card-title">Bruchetta</h4>
                  <h5 class="card-title">$12.99</h5>
                </div>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <h5>Order and delivery</h5>
                <h5>+$2.00</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src={cream} class="card-img-top" alt="..." />
              <div class="card-body">
                <div id="card-title-div">
                  <h4 class="card-title">Lemon dessert</h4>
                  <h5 class="card-title">$12.99</h5>
                </div>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <h5>Order and delivery</h5>
                <h5>+$2.00</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonals">
        <h1>Testimonals</h1>
        <section id="testimonals-1">
          <div class="card" style={{ width: "18rem", margin: "5px" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem", margin: "5px" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem", margin: "5px" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
          <div class="card" style={{ width: "18rem", margin: "5px" }}>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </section>
      </section>
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
              voluptatibus aut similique accusantium, reiciendis nostrum,
              aliquid quisquam voluptatem quam cupiditate. Mollitia deserunt
              autem distinctio laboriosam?
            </p>
          </aside>
          <aside id="fourth-aside">
            <img src={owners} />
          </aside>
        </section>
      </section>
    </main>
  );
}

export default Main;
