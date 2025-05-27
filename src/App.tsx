import React from 'react';
import { Container } from '@mui/material';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </Container>
  );
};

export default App;