import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";

// Single source of truth for experience — auto-computed from career start.
const CAREER_START = new Date("2019-01-01");
const yearsOfExperience = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (1000 * 60 * 60 * 24 * 365.25)
);

const STATS = [
  { value: `${yearsOfExperience}+`, label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "5", label: "Companies" },
];

const About = () => {
  const calculateExperience = () => yearsOfExperience;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Box id="about" sx={{ mb: 8 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          About Me
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          A bit about who I am and what I do
        </Typography>

        {/* Stats row */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mb: 3,
            flexWrap: "wrap",
          }}
        >
          {STATS.map((s) => (
            <Paper
              key={s.label}
              sx={{
                px: 3,
                py: 2,
                borderRadius: 3,
                textAlign: "center",
                minWidth: 110,
                flex: "0 0 auto",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {s.label}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Paper elevation={0} sx={{ p: 3, borderRadius: 3 }}>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
              AI & Mobile Engineer
            </Box>{" "}
            with over {calculateExperience()} years of experience. I began my career building
            high-performance mobile apps (Android, Flutter, React Native) using Kotlin, Jetpack
            Compose, and Clean Architecture — and today I'm focused on developing{" "}
            <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
              LLM-powered agents and multimodal AI experiences
            </Box>{" "}
            at Fynd's Copilot platform.
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.8, color: "text.secondary" }}>
            My recent work includes dynamic tool calling for frontend automation, context-aware
            LLM state sync, and building AI voice/video call systems with real-time STT + TTS
            using Node.js, React, and Go. I thrive at the intersection of mobile engineering and
            AI infra — designing scalable architectures and pushing the boundaries of human–AI
            interaction.
          </Typography>
        </Paper>
      </Box>
    </motion.div>
  );
};

export default About;
