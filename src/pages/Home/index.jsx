import React from "react";
import Navbar from "../../components/Navbar";
import Carusel from "../../components/Carusel";
import Cart1 from "../../components/Cart1";
import Get from "../../components/Get";
import Cart2 from "../../components/Cart2";
import ContactC from "../../components/ContactC";
import Accordion from "../../components/Accordion";
import Qasos from "../../components/Filtr";

function Home() {
  return (
    <div>
      <Carusel />
      {/* <Cart1 /> */}
      <Accordion />
      <Get />
      <Qasos />
      <Cart2 />
      <ContactC />
    </div>
  );
}

export default Home;
