const Projects = () => {
  const projects = [
    {
      title: "React ML Prediction App",
      desc: "React + Flask + scikit-learn for disease prediction",
      github: "https://github.com/Maheshwari63/maheshwari-portfolio",
      live: "http://localhost:5173"
    },
    {
      title: "TensorFlow Image Classifier", 
      desc: "TensorFlow CNN deployed as web application",
      github: "https://github.com/Maheshwari63/maheshwari-portfolio",
      live: "http://localhost:5173"
    },
    {
      title: "React Portfolio Website",
      desc: "Fully responsive portfolio built with React and styled-components",
      github: "https://github.com/Maheshwari63/maheshwari-portfolio", 
      live: "http://localhost:5173"
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 2rem 4rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#333' }}>
        Projects
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: 'white', borderRadius: '12px', padding: '2rem', 
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ marginBottom: '1rem', color: '#2563eb', fontSize: '1.5rem' }}>
              {project.title}
            </h3>
            <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: 1.6 }}>
              {project.desc}
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" 
                style={{
                  padding: '0.75rem 1.5rem', background: '#2563eb', color: 'white', 
                  textDecoration: 'none', borderRadius: '8px', fontWeight: '500'
                }}>
                GitHub
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                style={{
                  padding: '0.75rem 1.5rem', background: '#10b981', color: 'white', 
                  textDecoration: 'none', borderRadius: '8px', fontWeight: '500'
                }}>
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
