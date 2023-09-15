import React from "react";
import Footer from "./Footer";
import Chicago from "./Chicago";
import Header from "./Header";
import Specials from "./Specials";
import Testimonals from "./Testimonals";

function Homepage() {
  return (
    <>
      <Header />
      <Specials />
      <Testimonals />
      <Chicago />
      <Footer />
    </>
  );
}

export default Homepage;
