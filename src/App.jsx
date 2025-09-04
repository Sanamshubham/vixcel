import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import Solutions from "./pages/Solutions";
// import Solution from "./components/Solution";
import IndustryDetail from "./pages/IndustryDetails";

const App = () => (
  <Router>
    <Navbar />

    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* About */}
      <Route path="/about" element={<About />} />

      {/* Services */}
      <Route path="/services" element={<Services />} />

      {/* Industry Detail (dynamic page) */}
      <Route path="/industry/:id" element={<IndustryDetail />} />

      {/* Solutions
      <Route path="/solutions" element={<Solutions />} /> 

      {/* Single Solution (if needed) 
      <Route path="/solution" element={<Solution />} />  */}

      {/* Contact */}
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <Footer />
  </Router>
);

export default App;
