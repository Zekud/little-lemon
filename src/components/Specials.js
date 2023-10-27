import React from "react";
import { useNavigate } from "react-router-dom";
import salad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import cream from "../icons_assets/lemon dessert.jpg";
import delivery from "../icons_assets/delivery.jpg";

function Specials() {
  const navigate = useNavigate();
  const menu = [
    {
      name: "Greek Salad",
      p: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      src: salad,
      price: "$12.99",
    },

    {
      name: "Bruschetta",
      p: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      src: bruchetta,
      price: "$5.99",
    },

    {
      name: "Lemon Dessert",
      p: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      src: cream,
      price: "$5.00",
    },
  ];
  return (
    <main>
      <section id="first-sec">
        <div id="sec-div">
          <h1>This Week's Specials!</h1>
          <button id="second-btn" onClick={() => navigate("/menu")}>
            Online Menu
          </button>
        </div>
      </section>
      <section id="second-sec">
        {menu.map((obj) => {
          return (
            <div
              key={obj.price}
              className="whole"
              onClick={() => navigate("/order-online")}
            >
              <div className="img-div">
                <img src={obj.src} alt={obj.name} />
              </div>
              <div>
                <div className="price">
                  <h3>{obj.name}</h3>
                  <span>{obj.price}</span>
                </div>
                <div className="para">
                  <p>{obj.p}</p>
                </div>
                <div className="foot-div">
                  <button
                    className="order-online"
                    onClick={() => navigate("/order-online")}
                  >
                    Order a Delivery
                  </button>
                  <img src={delivery} alt="delivery icon" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}

export default Specials;
