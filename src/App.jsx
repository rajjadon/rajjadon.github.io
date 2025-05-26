import React from "react";
import { Container } from "@mui/material";
import Experience from './components/Experience';
import About from './components/About';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      <Profile/>
      <About/>
      <Experience />
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
    </Container>
  );
}