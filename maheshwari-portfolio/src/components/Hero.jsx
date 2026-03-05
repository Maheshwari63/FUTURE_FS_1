const Hero = () => {
  return (
    <section id="home" style={{ 
      height: '100vh', display: 'flex', alignItems: 'center', 
      justifyContent: 'center', textAlign: 'center', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
      color: 'white', padding: '0 2rem' 
    }}>
      <div>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', fontWeight: 'bold' }}>
          Hi, I'm <span style={{ color: '#fbbf24' }}>Maheshwari</span>
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem', opacity: 0.9 }}>
          AIML Student | React Developer
        </p>
        <a href="#projects" style={{
          padding: '1rem 2rem', background: 'white', color: '#2563eb', 
          textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold',
          fontSize: '1.1rem'
        }}>
          See My Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
