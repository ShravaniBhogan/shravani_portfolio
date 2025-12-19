import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaAward } from 'react-icons/fa'; // <--- Added imports

const About = () => {
  
  // Data for Certifications Section (Edit these details)
  const certifications = [
    {
      title: "Machine Learning Specialization",
      issuer: "DeepLearning.AI & Stanford",
      date: "2025",
      link: "https://www.coursera.org/account/accomplishments/specialization/SIN0HOQLLTFK" 
    },
    {
      title: "Python Bootcamp",
      issuer: "Udemy",
      date: "2024",
      link: "https://www.udemy.com/certificate/UC-f38e1d7a-7b7c-4bca-bfc8-7ebe778f5772/" 
    },
        {
      title: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2024",
      link: "http://udemy.com/certificate/UC-a1df20e3-5613-4440-94d0-45e8356f0d95/" 
    },
        {
      title: "SQL (Basic) Certificate",
      issuer: "HackerRank",
      date: "2025",
      link: "https://www.hackerrank.com/certificates/a70cbaacf451" 
    }
  ];

  // Data for the Skills Section
  const skillsCategories = [
    {
      title: "Languages",
      skills: ["Python", "C++", "JavaScript", "Java"], 
      color: "#e2f0cb" // Pastel Green
    },
    {
      title: "Frontend",
      skills: ["React", "HTML", "CSS", "Tailwind", "Streamlit"], 
      color: "#ffdac1" // Pastel Peach
    },
    {
      title: "Databases",
      skills: ["SQL", "MongoDB"], 
      color: "#c7ceea" // Pastel Purple
    },
    {
      title: "Tools ",
      skills: ["VS Code", "GitHub", "Postman", "Figma", "Canva", "MongoDB Compass"], 
      color: "#FFF4BD" // Pastel Yellow
    },
    {
      title: "Domains",
      skills: ["Web Development", "Machine Learning", "Data Science"],
      color: "#ff9aa2" // Pastel Pink
    }
  ];

  return (
    <div className="page-container">
      <motion.h2 
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
      >
        About Me
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Education Section */}
        <motion.div 
          className="glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>🎓 Education</h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            marginTop: '1.5rem',
            justifyContent: 'space-between'
          }}>
            
            {/* Degree 1: B.E. */}
            <div style={styles.eduCard}>
              <p style={{ fontSize: '1.1rem', color: '#6d6875', marginBottom: '5px' }}>
                <strong>B.E. in Computer Engineering</strong>
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                Thakur College of Engineering and Technology
              </p>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>2022 - 2026 | <strong>CGPA: 9.72/10</strong></p>
            </div>

            {/* Degree 2: H.S.C. */}
            <div style={styles.eduCard}>
              <p style={{ fontSize: '1.1rem', color: '#6d6875', marginBottom: '5px' }}>
                <strong>H.S.C. (Science)</strong>
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                St. Rocks College of Commerce, Science & Law
              </p>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>2022 | <strong>Percentage: 93%</strong></p>
            </div>

            {/* Degree 3: S.S.C. */}
            <div style={styles.eduCard}>
              <p style={{ fontSize: '1.1rem', color: '#6d6875', marginBottom: '5px' }}>
                <strong>S.S.C.</strong>
              </p>
              <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                Swami Vivekanand International School
              </p>
              <p style={{ color: '#888', fontSize: '0.85rem' }}>2020 | <strong>Percentage: 92%</strong></p>
            </div>

          </div>
        </motion.div>

        {/* ======================================================= */}
        {/* NEW SECTION: CERTIFICATIONS (Added Below Education)     */}
        {/* ======================================================= */}
        <motion.div 
          className="glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3>
            <FaAward style={{ marginRight: '10px', color: '#ff9aa2', fontSize: '1.5rem', verticalAlign: 'bottom' }}/>
            Certifications
          </h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            marginTop: '1.5rem',
            justifyContent: 'space-between'
          }}>
            {certifications.map((cert, index) => (
              <div key={index} style={styles.eduCard}>
                <p style={{ fontSize: '1.1rem', color: '#6d6875', marginBottom: '5px' }}>
                  <strong>{cert.title}</strong>
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '5px' }}>
                  {cert.issuer}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                   <p style={{ color: '#888', fontSize: '0.85rem' }}>Issued: {cert.date}</p>
                   
                   {/* Verification Link Button */}
                   <a href={cert.link} target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: '#b5eadd', fontWeight: 'bold', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     Verify <FaExternalLinkAlt style={{ fontSize: '0.7rem' }}/>
                   </a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* ======================================================= */}

        {/* Horizontal Skills Section */}
        <motion.div 
          className="glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>💻 Skills</h3>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            flexWrap: 'wrap', 
            gap: '2rem', 
            marginTop: '1.5rem',
            justifyContent: 'space-between' 
          }}>
            {skillsCategories.map((category, index) => (
              <div key={index} style={{ flex: '1 1 200px' }}> 
                <h4 style={{ marginBottom: '0.8rem', color: '#6d6875', borderBottom: '2px solid #eee', paddingBottom: '5px' }}>
                  {category.title}
                </h4>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      style={{ 
                        background: category.color, 
                        padding: '6px 14px', 
                        borderRadius: '20px', 
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        color: '#555',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)' 
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hobbies Section */}
        <motion.div 
          className="glass-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>🎨 Hobbies</h3>
          <p>When I'm not coding, I love to read, travel and paint.</p>
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  eduCard: {
    flex: '1 1 300px', 
    background: 'rgba(255, 255, 255, 0.5)', 
    padding: '1.5rem',
    borderRadius: '15px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
    border: '1px solid rgba(15, 208, 208, 0.86)'
  }
};

export default About;