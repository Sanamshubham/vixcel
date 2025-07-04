import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
import Solution from "./components/Solution";


const App = () => (
  <div>
    {/* <Services/> */}
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>}/>
      {/* <Route path="/solution" element={<Solution/>}/> */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <About/>
    <Services/>
    <Solution/>
    {/* <Solution/> */}
    <Contact/>
    <Footer />
  </Router>
  </div>
);

export default App;
