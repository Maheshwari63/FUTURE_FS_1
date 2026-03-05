const Contact = () => {
  return (
    <section id="contact" style={{ 
      padding: '100px 2rem 4rem', 
      maxWidth: '1200px', margin: '0 auto',
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      color: 'white'
    }}>
      <h2 style={{ 
        textAlign: 'center', fontSize: '2.5rem', 
        marginBottom: '3rem', color: 'white' 
      }}>
        Get In Touch
      </h2>
      
      <div style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr 1fr' }}>
        {/* Contact Info */}
        <div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#fbbf24' }}>
            Let's Connect!
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📧
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: '500', color: '#e2e8f0' }}>Email</p>
                <p>maheshwari.r9743@gmail.com</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: '#10b981', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                📱
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: '500', color: '#e2e8f0' }}>Phone</p>
                <p>+91 6360183709</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: '#f59e0b', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                💻
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: '500', color: '#e2e8f0' }}>GitHub</p>
                <a href="https://github.com/Maheshwari63" style={{ color: '#60a5fa', textDecoration: 'none' }}>Maheshwari63</a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <input type="text" placeholder="Your Name" style={{
              width: '100%', padding: '1rem', border: 'none',
              borderRadius: '12px', fontSize: '1rem',
              background: 'rgba(255,255,255,0.1)', color: 'white',
              backdropFilter: 'blur(10px)'
            }} />
          </div>
          <div>
            <input type="email" placeholder="Your Email" style={{
              width: '100%', padding: '1rem', border: 'none',
              borderRadius: '12px', fontSize: '1rem',
              background: 'rgba(255,255,255,0.1)', color: 'white',
              backdropFilter: 'blur(10px)'
            }} />
          </div>
          <div>
            <textarea placeholder="Your Message" rows="5" style={{
              width: '100%', padding: '1rem', border: 'none',
              borderRadius: '12px', fontSize: '1rem', resize: 'vertical',
              background: 'rgba(255,255,255,0.1)', color: 'white',
              backdropFilter: 'blur(10px)'
            }} />
          </div>
          <button type="submit" style={{
            padding: '1rem 2rem', background: '#fbbf24', color: '#1e293b',
            border: 'none', borderRadius: '12px', fontSize: '1.1rem',
            fontWeight: 'bold', cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
