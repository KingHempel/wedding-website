import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./components/Style.css";

import Home from "./pages/Home";
import TheDay from "./pages/TheDay";
import WeddingParty from "./pages/WeddingParty";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/Faqs";
import RSVP from "./pages/Rsvp";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/theday" element={<TheDay />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
