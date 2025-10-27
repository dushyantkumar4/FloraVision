import React from "react";
import "./App.css";

import LendingPage from "./views/LendingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./views/Cards";
import CustomerReview from "./views/CustomerReview";
import OurBest from "./components/OurBest";

const App = () => {
  return (
    <div className="w-full bg-[#1B2316]">
      <Navbar />
      <LendingPage />
      <Cards />
      <br />
      <CustomerReview />
      <OurBest />
      <Footer />
    </div>
  );
};

export default App;
