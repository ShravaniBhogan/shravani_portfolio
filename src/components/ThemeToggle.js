// import React, { useEffect, useState } from 'react';
// import { FaSun, FaMoon } from 'react-icons/fa';
// import { motion } from 'framer-motion';

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

//   // Apply theme to the HTML body
//   useEffect(() => {
//     document.documentElement.setAttribute('data-theme', theme);
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <motion.button
//       onClick={toggleTheme}
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       style={{
//         background: 'transparent',
//         border: 'none',
//         cursor: 'pointer',
//         fontSize: '1.5rem',
//         color: theme === 'light' ? '#f39c12' : '#f1c40f', // Orange sun, Yellow moon
//         display: 'flex',
//         alignItems: 'center',
//         marginLeft: '20px'
//       }}
//     >
//       {theme === 'light' ? <FaSun /> : <FaMoon />}
//     </motion.button>
//   );
// };

// export default ThemeToggle;