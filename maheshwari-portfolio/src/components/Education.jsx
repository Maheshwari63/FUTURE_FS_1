const Education = () => {
  const education = [
    {
      degree: "B.Tech Artificial Intelligence & Machine Learning",
      school: "Ballari Institute of Technology and Management",
      year: "2024 - 2028",
      grade: "CGPA: 9.15"
    },
    {
      degree: "12th PUC - Science (PCMB)",
      school: "Ballari Independent Pre University College",
      year: "2022 - 2024", 
      grade: "90%"
    },
    {
      degree: "10th SSLC",
      school: "Nandini High School, Ballari",
      year: "2021 - 2022",
      grade: "96%"
    }
  ];

  return (
    <section id="education" style={{ 
      padding: '100px 2rem 4rem', 
      maxWidth: '1200px', margin: '0 auto',
      backgroundColor: 'white'
    }}>
      <h2 style={{ 
        textAlign: 'center', fontSize: '2.5rem', 
        marginBottom: '3rem', color: '#1e293b' 
      }}>
        Education
      </h2>
      <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
        {education.map((edu, index) => (
          <div key={index} style={{
            padding: '2.5rem', borderRadius: '16px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            borderLeft: '5px solid #2563eb'
          }}>
            <h3 style={{ 
              margin: '0 0 0.5rem 0', color: '#2563eb', 
              fontSize: '1.4rem', fontWeight: 'bold' 
            }}>
              {edu.degree}
            </h3>
            <h4 style={{ 
              margin: '0 0 1rem 0', color: '#1e293b', 
              fontSize: '1.1rem' 
            }}>
              {edu.school}
            </h4>
            <div style={{ display: 'flex', gap: '2rem', color: '#64748b' }}>
              <span>{edu.year}</span>
              <span style={{ fontWeight: '600', color: '#2563eb' }}>
                {edu.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
