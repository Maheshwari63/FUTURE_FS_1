import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ 
      width: '100vw', minHeight: '100vh', margin: 0, padding: 0,
      backgroundColor: '#f8fafc'
    }}>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
