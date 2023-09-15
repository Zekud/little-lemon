import React from "react";
import salad from "./icons_assets/greek salad.jpg";
import bruchetta from "./icons_assets/bruchetta.svg";
import cream from "./icons_assets/lemon dessert.jpg";

function Specials() {
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
    </main>
  );
}

export default Specials;
