import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import Hero from "../hero/Hero";

const App = () => {
  return (
    <Router>
      <AppHeader />
      <main>
        <Hero />
      </main>
    </Router>
  );
};
export default App;
