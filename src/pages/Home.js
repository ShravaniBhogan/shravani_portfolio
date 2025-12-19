import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profpic from '../assets/shravani_pic.jpeg';
// Import your image. If you don't have one yet, it will break, so place a placeholder.
// import profilePic from '../assets/profile.jpg'; 

const Home = () => {
  return (
    <div className="page-container" style={{ textAlign: 'center', alignItems: 'center' }}>
      <motion.img 
        src={profpic} // Replace this string with: {profilePic}
        alt="Profile"
        style={{ 
          width: '400px', 
          height: '400px', 
          borderRadius: '50%', 
          border: '5px solid white',
          objectFit: 'cover',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Hi, I'm Shravani Bhogan 😊
      </motion.h1>

      <motion.p
        style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.2rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        A Computer Engineering Student passionate about building aesthetic and functional software.
      </motion.p>

      <motion.div 
        className="social-icons"
        style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', fontSize: '2rem', color: '#888' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <a href="https://github.com/ShravaniBhogan" target="_blank" rel="noreferrer" style={{color: 'inherit'}}><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shravani-bhogan-67034b281/" target="_blank" rel="noreferrer" style={{color: 'inherit'}}><FaLinkedin /></a>
      </motion.div>
    </div>
  );
};

export default Home;