// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppHeader from "../appHeader/AppHeader";
import Hero from "../hero/Hero";
import About from "../about/About";
import Town from "../town/Town";
import Info from "../info/Info";

const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <AppHeader />
      <main>
        <Hero />
        <About />
        <Town />
        <Info />
      </main>
    </>
  );
};
export default App;
