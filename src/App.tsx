import React from 'react';
import { Box, Container } from '@mui/material';
import NavBar from './components/NavBar';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import KailyChat from './components/KailyChat';

const App = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      <NavBar />
      <Container maxWidth="lg" sx={{ pt: 10, pb: 8, px: { xs: 2, sm: 3 } }}>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </Container>
      <KailyChat />
    </Box>
  );
};

export default App;
