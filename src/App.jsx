import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Principles from './components/sections/Principles';
import Initiatives from './components/sections/Initiatives';
import Events from './components/sections/Events';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Principles />
        <Initiatives />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
