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
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 6 },
          mb: 8,
          py: { xs: 4, md: 6 },
        }}
      >
        {/* Text side */}
        <Box sx={{ flex: 1, textAlign: { xs: "center", md: "left" } }}>
          <Chip
            label="Open to opportunities"
            size="small"
            sx={{
              mb: 2,
              bgcolor: "rgba(99,102,241,0.15)",
              color: "#6366f1",
              border: "1px solid rgba(99,102,241,0.4)",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.2rem", md: "3.8rem" },
              fontWeight: 800,
              lineHeight: 1.1,
              mb: 1.5,
              background: "linear-gradient(135deg, #6366f1 0%, #22d3ee 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {profile.name}
          </Typography>

          <Typography
            variant="h5"
            color="text.secondary"
            sx={{ mb: 1, fontWeight: 500 }}
          >
            AI & Mobile Engineer
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 1, maxWidth: 480, mx: { xs: "auto", md: 0 } }}
          >
            Building LLM-powered agents and high-performance Android apps at{" "}
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
              mb: 3,
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
                px: 3,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "#6366f1",
                "&:hover": { bgcolor: "#4f46e5" },
              }}
            >
              Download Resume
            </Button>

            <Button
              variant="outlined"
              onClick={handleContactClick}
              sx={{
                px: 3,
                py: 1.2,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
                borderColor: "#334155",
                color: "text.primary",
                "&:hover": {
                  borderColor: "#6366f1",
                  bgcolor: "rgba(99,102,241,0.08)",
                },
              }}
            >
              Contact Me
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 1,
              mt: 2.5,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Tooltip title="View GitHub Profile">
              <IconButton
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "#6366f1" },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="View LinkedIn Profile">
              <IconButton
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "#6366f1" },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>

        {/* Avatar side */}
        <Box sx={{ flexShrink: 0 }}>
          <Box
            sx={{
              width: { xs: 140, md: 180 },
              height: { xs: 140, md: 180 },
              borderRadius: "50%",
              p: "3px",
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            }}
          >
            <Avatar
              src={profile.avatar}
              alt={profile.name}
              sx={{
                width: "100%",
                height: "100%",
                border: "3px solid #0f172a",
              }}
            />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Profile;
