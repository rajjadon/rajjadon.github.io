import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  const calculateExperience = () => {
    const startDate = new Date("2019-01-01");
    const currentDate = new Date();
    const diffInYears =
      (currentDate - startDate) / (1000 * 60 * 60 * 24 * 365.25);
    return Math.floor(diffInYears);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Paper
        elevation={4}
        sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          <b>AI & Mobile Engineer</b>{" "}
          with over {calculateExperience()} years of experience. I began my
          career building high-performance mobile apps (Android, Flutter, React
          Native) using Kotlin, Jetpack Compose, and Clean Architecture, and
          today I’m focused on developing{" "}
          <b>LLM-powered agents and multimodal AI experiences</b> at Fynd’s
          Copilot platform.
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          My recent work includes{" "}
          <b>dynamic tool calling for frontend automation</b>,{" "}
          <b>context-aware LLM state sync</b>, and building
          <b>AI voice/video call systems with real-time STT + TTS</b> using
          Node.js, React, and Go. I thrive at the intersection of{" "}
          <b>mobile engineering and AI infra</b>, where I can design scalable
          architectures, collaborate across teams, and push the boundaries of
          human–AI interaction.
        </Typography>
        <Typography variant="body1">
          Let's build something amazing together!
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default About;
