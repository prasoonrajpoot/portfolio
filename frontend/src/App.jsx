import React from "react";

import Navbar from "./components/Navbar.jsx";
import Contact from "./components/Contact.jsx";
import Experience from "./components/Experience.jsx";
import Feedbacks from "./components/Feedbacks.jsx";
import Hero from "./components/Hero.jsx";
import StarsCanvas from "./components/StarsCanvas.jsx";
import Tech from "./components/Tech.jsx";
import Works from "./components/Works.jsx";
import About from "./components/About.jsx";


function App() {
  return(
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}

export default App;
