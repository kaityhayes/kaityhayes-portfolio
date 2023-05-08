import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import HeaderImage from './assets/HeaderImage';
import RockPaperScissors from './components/RockPaperScissors';

function App() {
  return (
    <>
      <div className="flex justify-center">
        <HeaderImage />
      </div>
      <div className="flex justify-center">
        <nav className="mt-6">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-gray-900 hover:text-gray-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-900 hover:text-gray-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-900 hover:text-gray-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/projects" className="text-gray-900 hover:text-gray-600">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <h1>Being built!</h1>
        <p>In the mean time, here's a game!</p>
        <RockPaperScissors /><br />
        {/* <footer>2023</footer> */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
