import React from "react";
import { Route, Routes } from "react-router";
import Home from "../../pages/Home";
import Properties from "../../pages/Properties";
import PropertyDetails from "../../pages/Property Details";
import ContactUs from "../../pages/Contact Us";
import Navbar from "../Navbar";
import Futter from "../Futter";

function Root() {
  return (
    <div>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/propertydetails" element={<PropertyDetails />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Futter />
      </div>
    </div>
  );
}

export default Root;
