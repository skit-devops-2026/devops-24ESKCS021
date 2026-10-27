import React from "react";
import Clubs from "./pages/Clubs";
import Events from "./pages/Events";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/clubs" element={<Clubs />} />
      </Routes>
    </div>
  );
};

export default App;
