import React from 'react'
import About from './About.jsx'
import Home from './Home'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

import data from "../constants/data.js";

function Layout() {
  return (
    <div>
      <Home  ></Home>
      <About ></About>
      <Experience ></Experience>
      <Projects ></Projects>
      <Contact ></Contact>
    </div>
  )
}

export default Layout