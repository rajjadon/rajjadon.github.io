import React from 'react';
import profile from '../data/profile.json';
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box, Typography, IconButton, Avatar, Button, Tooltip, Chip } from "@mui/material";
import { motion } from "framer-motion";

const Profile = () => {
  const handleContactClick = () => {
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Box sx={{ position: "relative", overflow: "hidden", mb: { xs: 6, md: 10 } }}>
      {/* Animated gradient accent blobs */}
      <Box
        component={motion.div}
        aria-hidden
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: -80,
          left: -60,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.35), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        aria-hidden
        animate={{ x: [0, -40, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        sx={{
          position: "absolute",
          top: 40,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.28), transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 4, md: 6 },
            py: { xs: 4, md: 8 },
          }}
        >
          {/* Text side */}
          <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
            <Chip
              label="● Open to opportunities"
              size="small"
              sx={{
                mb: 2.5,
                bgcolor: "rgba(34,211,238,0.12)",
                color: "#22d3ee",
                border: "1px solid rgba(34,211,238,0.4)",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.02em",
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.6rem", sm: "3.4rem", md: "4.4rem" },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                mb: 2,
              }}
            >
              Hi, I'm{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {profile.name.split(" ")[0]}
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
            >
              AI &amp; Mobile Engineer
            </Typography>

            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: 2, maxWidth: 520, mx: { xs: "auto", md: 0 }, lineHeight: 1.7 }}
            >
              I build LLM-powered agents and high-performance Android apps at{" "}
              <Box component="span" sx={{ color: "primary.main", fontWeight: 600 }}>
                Fynd
              </Box>
              . Kotlin · Jetpack Compose · Node.js · Go · WebRTC.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.5,
                mb: 3.5,
                justifyContent: { xs: "center", md: "flex-start" },
                color: "text.secondary",
              }}
            >
              <LocationOnIcon sx={{ fontSize: 16 }} />
              <Typography variant="body2">{profile.location}</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <Button
                variant="contained"
                href={profile.resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<DownloadIcon />}
                sx={{
                  px: 3.5,
                  py: 1.3,
                  borderRadius: 999,
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                  boxShadow: "0 8px 24px rgba(99,102,241,0.35)",
                  "&:hover": {
                    background: "linear-gradient(135deg, #4f46e5, #06b6d4)",
                    boxShadow: "0 10px 28px rgba(99,102,241,0.45)",
                  },
                }}
              >
                Download Resume
              </Button>

              <Button
                variant="outlined"
                onClick={handleContactClick}
                sx={{
                  px: 3.5,
                  py: 1.3,
                  borderRadius: 999,
                  fontWeight: 600,
                  textTransform: "none",
                  fontSize: "1rem",
                  borderColor: "#334155",
                  color: "text.primary",
                  "&:hover": { borderColor: "#6366f1", bgcolor: "rgba(99,102,241,0.08)" },
                }}
              >
                Contact Me
              </Button>

              <Box sx={{ display: "flex", gap: 0.5, ml: { md: 1 } }}>
                <Tooltip title="View GitHub Profile">
                  <IconButton
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "text.secondary", "&:hover": { color: "#6366f1" } }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="View LinkedIn Profile">
                  <IconButton
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: "text.secondary", "&:hover": { color: "#6366f1" } }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>

          {/* Avatar side */}
          <Box sx={{ flexShrink: 0, position: "relative" }}>
            <Box
              component={motion.div}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              sx={{
                width: { xs: 170, md: 230 },
                height: { xs: 170, md: 230 },
                borderRadius: "50%",
                p: "4px",
                background: "linear-gradient(135deg, #6366f1, #22d3ee)",
                boxShadow: "0 0 60px rgba(99,102,241,0.4)",
              }}
            >
              <Avatar
                src={profile.avatar}
                alt={profile.name}
                sx={{ width: "100%", height: "100%", border: "4px solid #0f172a" }}
              />
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Profile;
