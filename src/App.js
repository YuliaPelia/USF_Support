// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppHeader from "./components/AppHeader";
import Hero from "./components/Hero";
import About from "./components/About";
import Town from "./components/Town";
import Info from "./components/Info";
import Help from "./components/Help";
import Game from "./components/Game";
import Achievement from "./components/Achievement";

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
        <Town
          title="Львів-МІСТО ГЕРОЙ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Info />
        <Town
          title="Київ-МІСТО ГЕРОЙ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Help />
        <Town
          title="Херсон-МІСТО ГЕРОЙ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />

        <Game />
        <Town
          title="Маріуполь-МІСТО ГЕРОЙ"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <Achievement />
      </main>
    </>
  );
};
export default App;
