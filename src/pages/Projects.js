import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import cineImg from '../assets/cine-match-ss.png'
import tomatoImg from '../assets/tomato.png'
import handwritten from '../assets/handwritten.png'
import budget from '../assets/budegetmate.png'
import portfolio from '../assets/home.jpeg'

const projectsData = [
  {
    title: "Personal Portfolio Website",
    desc: "Designed and developed a highly interactive portfolio featuring modular component architecture, complex CSS animations, and a fully responsive layout.",
    img: portfolio, 
    link: "https://github.com/ShravaniBhogan/shravani_portfolio",
    tech: ["React", "Framer Motion", "CSS"]
    // No demo link needed since they are already here!
  },
  {
    title: "Cine-Match",
    desc: "CineMatch is an intelligent content-based movie recommendation system that suggests similar films using NLP-powered feature vectors.",
    img: cineImg,
    link: "https://github.com/ShravaniBhogan/cine-match",
    demo: "https://cine-match-nugvymk4zmdsapbuyojvjj.streamlit.app/",
    tech: ["Python", "Streamlit", "Scikit-Learn", "NumPy", "Pandas"]
  },
  {
    title: "Tomato Food Delivery",
    desc: "End-to-end food delivery web application featuring dynamic menu rendering, cart management, and secure payment processing.",
    img: tomatoImg,
    link: "https://github.com/yourusername/tomato_food_del", // GitHub Link
    demo: "https://your-project.vercel.app", // <--- ADD YOUR VERCEL LINK HERE
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay API"]
  },
{
    title: "Handwritten digit prediction",
    desc: "A machine learning project that predicts handwritten digits (0–9) from image data using a trained classification model.",
    img: handwritten,
    link: "https://github.com/ShravaniBhogan/InternshipProject", // GitHub Link
    demo: "https://colab.research.google.com/drive/1bNn4kTej15lQjPiUIUC5p8zspeyiZ13d?usp=sharing", // <--- ADD YOUR VERCEL LINK HERE
    tech: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib"]
  },
  {
    title: "BudgetMate",
    desc: "A responsive personal finance management web application that enables users to track income and expenses with categorization, filtering, and real-time analytics displayed through an intuitive dashboard.",
    img: budget,
    link: "https://github.com/ShravaniBhogan/expenseTracker", // GitHub Link
    demo: "https://shravanibhogan.github.io/expenseTracker/", // <--- ADD YOUR VERCEL LINK HERE
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Local Storage API"]
  }
];

const Projects = () => {
  return (
    <div className="page-container">
      <motion.h2 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }}
      >
        My Projects
      </motion.h2>

      <div className="project-grid">
        {projectsData.map((project, index) => (
          <motion.div 
            className="glass-card"
            key={index}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <img src={project.img} alt={project.title} className="project-img" />
            
            <h3 style={{ marginBottom: '0.5rem' }}>{project.title}</h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1rem' }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  fontSize: '0.8rem',
                  background: 'rgba(181, 234, 221, 0.4)',
                  color: '#555',
                  padding: '4px 10px',
                  borderRadius: '12px',
                  fontWeight: '600'
                }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={{ fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1, color: '#666' }}>
              {project.desc}
            </p>
            
            {/* Buttons Container */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              
              {/* GitHub Button (Lavender) */}
              <a 
                href={project.link} 
                className="btn btn-primary" 
                target="_blank" 
                rel="noreferrer" 
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                 Code <FaGithub />
              </a>

              {/* Live Demo Button (Pastel Pink/Peach) */}
              {project.demo && (
                <a 
                  href={project.demo} 
                  className="btn btn-demo"  // <--- NEW CLASS HERE
                  target="_blank" 
                  rel="noreferrer"
                >
                   Live Demo <FaExternalLinkAlt style={{ fontSize: '0.9rem' }}/>
                </a>
              )}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;