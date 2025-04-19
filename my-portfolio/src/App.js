import React from 'react';
import Home from './components/Home';
import Service from './components/Service';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Projects />
      <Service />
      <Contact />
    </div>
  );
}

export default App;

