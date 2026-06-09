import React from 'react';
import { Box, Container } from '@mui/material';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        // Layered depth so the dark canvas isn't a flat void
        background:
          "radial-gradient(1000px circle at 15% -5%, rgba(99,102,241,0.16), transparent 45%), " +
          "radial-gradient(820px circle at 95% 5%, rgba(34,211,238,0.12), transparent 42%), " +
          "#0f172a",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: 4, px: { xs: 2, sm: 3 } }}>
        <Profile />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </Container>
      <Footer />
    </Box>
  );
};

export default App;
