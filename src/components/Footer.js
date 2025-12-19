import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Social Icons */}
        <div style={styles.socials}>
          <a href="https://github.com/ShravaniBhogan" target="_blank" rel="noreferrer" style={styles.icon}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/shravani-bhogan-67034b281/" target="_blank" rel="noreferrer" style={styles.icon}>
            <FaLinkedin />
          </a>
          <a href="mailto:your.email@example.com" style={styles.icon}>
            <FaEnvelope />
          </a>
        </div>

        {/* Copyright Text */}
        <p style={styles.text}>
          Designed & Built with <FaHeart style={{ color: '#ff9aa2', margin: '0 5px' }} /> using React.
        </p>
        <p style={styles.subText}>
          © {new Date().getFullYear()} Shravani Bhogan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

// Internal CSS
const styles = {
  footer: {
    padding: '2rem 0',
    textAlign: 'left',
    position: 'relative',
    marginTop: 'auto',
    width: '100%',
    background: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.6)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Aligns items to the left
    gap: '1rem',
    // CHANGE THIS VALUE to control the distance from the left edge:
    paddingLeft: '2rem', // Reduced from 2rem to 1rem
    paddingRight: '1rem', 
    width: '100%', 
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '1.5rem',
  },
  icon: {
    color: '#6d6875',
    transition: 'transform 0.2s, color 0.2s',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: '#4a4a4a',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  subText: {
    color: '#888',
    fontSize: '0.9rem',
  }
};

export default Footer;