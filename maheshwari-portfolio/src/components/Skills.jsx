const Skills = () => {
  const skills = [
    { name: 'React.js', level: 85, color: '#61dafb' },
    { name: 'JavaScript', level: 90, color: '#f7df1e' },
    { name: 'HTML/CSS', level: 95, color: '#ff6b35' },
    { name: 'Node.js', level: 70, color: '#68d391' },
    { name: 'Python', level: 80, color: '#f0932b' },
    { name: 'Git/GitHub', level: 85, color: '#f97316' },
   
    
  ];

  return (
    <section id="skills" style={{ 
      padding: '100px 2rem 4rem', 
      maxWidth: '1200px', margin: '0 auto', 
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <h2 style={{ 
        textAlign: 'center', fontSize: '2.5rem', 
        marginBottom: '3rem', color: '#1e293b' 
      }}>
        Skills
      </h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{
            background: 'white', padding: '2rem', borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              marginBottom: '1rem', color: '#2563eb', 
              fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem'
            }}>
              {skill.name}
            </h3>
            <div style={{ 
              height: '12px', background: '#e2e8f0', 
              borderRadius: '6px', overflow: 'hidden', marginBottom: '0.5rem'
            }}>
              <div style={{
                height: '100%', width: `${skill.level}%`,
                background: skill.color, borderRadius: '6px',
                transition: 'width 2s ease-in-out'
              }} />
            </div>
            <span style={{ color: '#64748b', fontWeight: '500' }}>
              {skill.level}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
