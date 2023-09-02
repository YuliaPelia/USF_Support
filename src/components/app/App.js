import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AppHeader from "../appHeader/AppHeader";
import Hero from "../hero/Hero";
import About from "../about/About";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <AppHeader />
      <main>
        <Hero />
        <About />
      </main>
    </Router>
  );
};
export default App;
