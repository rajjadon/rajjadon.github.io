import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";
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

const About = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="about" sx={{ mb: { xs: 8, md: 12 } }}>
      <Typography
        variant="overline"
        sx={{ color: "secondary.main", fontWeight: 700, letterSpacing: "0.15em" }}
      >
        ABOUT ME
      </Typography>
      <Typography variant="h4" sx={{ mb: 4, mt: 0.5 }}>
        A bit about who I am
      </Typography>

      <Grid container spacing={3} alignItems="stretch">
        {/* Summary */}
        <Grid item xs={12} md={8}>
          <Paper elevation={0} sx={{ p: { xs: 3, md: 4 }, borderRadius: 4, height: "100%" }}>
            <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.9, fontSize: "1.05rem" }}>
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                AI &amp; Mobile Engineer
              </Box>{" "}
              with over {yearsOfExperience} years of experience. I began my career building
              high-performance mobile apps (Android, Flutter, React Native) using Kotlin, Jetpack
              Compose, and Clean Architecture — and today I'm focused on developing{" "}
              <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
                LLM-powered agents and multimodal AI experiences
              </Box>{" "}
              at Fynd's Kaily platform.
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.9, color: "text.secondary" }}>
              My recent work includes dynamic tool calling for frontend automation, context-aware
              LLM state sync, and building AI voice/video call systems with real-time STT + TTS
              using Node.js, React, and Go. I thrive at the intersection of mobile engineering and
              AI infra — designing scalable architectures and pushing the boundaries of human–AI
              interaction.
            </Typography>
          </Paper>
        </Grid>

        {/* Stats sidebar */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "column" },
              gap: 2,
              height: "100%",
            }}
          >
            {STATS.map((s) => (
              <Paper
                key={s.label}
                elevation={0}
                sx={{
                  flex: 1,
                  px: 3,
                  py: { xs: 2, md: 2.5 },
                  borderRadius: 4,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.10), rgba(34,211,238,0.05))",
                  transition: "border-color 0.2s, transform 0.2s",
                  "&:hover": { borderColor: "#6366f1", transform: "translateY(-3px)" },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 800,
                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                    background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {s.value}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 500 }}>
                  {s.label}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  </motion.div>
);

export default About;
