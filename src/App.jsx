import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Sme from "./components/sme/Sme";
import Cooperate from "./components/cooperate/Cooperate";
import Baogia from "./components/bao-gia/Baogia";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      {/* <Sme /> */}
      <Cooperate />
      <Baogia />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
