import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Hi, I'm <b>Raj Pratap Singh Jadon</b>, a passionate Android Engineer with over 6 years of experience building high-performance, user-focused mobile applications. I specialize in Kotlin, Jetpack Compose, and Clean Architecture. My experience spans startups and enterprise environments, where I've delivered innovative solutions and led Android teams to success. 
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          I'm deeply invested in modern Android development (DI, KMP, Compose, Coroutines) and love collaborating with cross-functional teams to create delightful user experiences. I thrive in dynamic environments that value autonomy and innovation.
        </Typography>
        <Typography variant="body1">
          Let's build something amazing together!
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default About;