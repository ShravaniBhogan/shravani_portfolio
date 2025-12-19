import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import resume from '../assets/final_resume-Shravani.pdf';
// import ResumePDF from '../assets/resume.pdf'; // Uncomment when you add your file

const Resume = () => {
  return (
    <div className="page-container" style={{ alignItems: 'center', textAlign: 'center' }}>
      <motion.div 
        className="glass-card"
        style={{ maxWidth: '600px', width: '100%', padding: '3rem' }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <h2>My Resume</h2>
        <p style={{ marginBottom: '2rem' }}>
          Feel free to download my resume to get an overview of my skills and qualifications.
        </p>
        
        {/* Replace '#' with {ResumePDF} */}
        <a href={resume} download="Shravani_Resume.pdf" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem' }}>
          Download CV <FaDownload style={{ marginLeft: '10px' }}/>
        </a>
      </motion.div>
    </div>
  );
};

export default Resume;