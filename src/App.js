import React from "react";
import { GlobalStyle } from "./styledComponents/GlobalStyle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from './components/Services'
import Process from "./components/Process/Process";
import Package from "./components/Package";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <Package />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
