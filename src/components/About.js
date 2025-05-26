import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const About = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      About Me
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Hi, I'm <b>Raj Pratap Singh Jadon</b>, a passionate Android Engineer with over 6 years of experience building high-performance, user-focused mobile applications. I specialize in Kotlin, Jetpack Compose, and Clean Architecture. My experience spans startups and enterprise environments, where I’ve delivered innovative solutions and led Android teams to success. 
    </Typography>
    <Typography variant="body1" sx={{ mb: 1 }}>
      I’m deeply invested in modern Android development (DI, KMP, Compose, Coroutines) and love collaborating with cross-functional teams to create delightful user experiences. I thrive in dynamic environments that value autonomy and innovation.
    </Typography>
    <Typography variant="body1">
      Let’s build something amazing together!
    </Typography>
  </Paper>
);

export default About;