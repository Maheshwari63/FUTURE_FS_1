import { useState } from 'react';

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, 
      background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
      zIndex: 1000, padding: '1rem 0'
    }}>
      <div style={{ 
        maxWidth: '1200px', margin: '0 auto', 
        display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center', padding: '0 2rem' 
      }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold', color: '#2563eb' }}>
          Maheshwari AIML
        </h1>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#home" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Home</a>
          <a href="#projects" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Projects</a>
          <a href="#contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Contact</a>
          <a href="#skills" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Skills</a>
          <a href="#education" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }}>Education</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
