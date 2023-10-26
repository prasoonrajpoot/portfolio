
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Projects from './components/Projects';


function App() {
  return (
    <div className = "bg-stone-950 w-screen text-white min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path = "/" Component={Home} />
          <Route exact path = "/about" Component={About} />
          <Route exact path = "/contact" Component={Contact} />
          <Route exact path = "/experience" Component={Experience} />
          <Route exact path = "/projects" Component={Projects} />
        </Routes>  
        <Footer />
      </Router>
    </div>
  );
}

export default App;
