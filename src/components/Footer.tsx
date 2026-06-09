import React from 'react';
import { Box, Container, Typography, IconButton, Divider, Tooltip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profile from '../data/profile.json';

const Footer = () => (
  <Box component="footer" sx={{ borderTop: "1px solid", borderColor: "divider", mt: 4 }}>
    <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 800,
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {profile.name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            AI &amp; Mobile Engineer · Bengaluru, India
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Tooltip title="GitHub">
            <IconButton href={profile.github} target="_blank" rel="noopener noreferrer"
              size="small" sx={{ color: "text.secondary", "&:hover": { color: "#6366f1" } }}>
              <GitHubIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="LinkedIn">
            <IconButton href={profile.linkedin} target="_blank" rel="noopener noreferrer"
              size="small" sx={{ color: "text.secondary", "&:hover": { color: "#6366f1" } }}>
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      <Divider sx={{ my: 2.5 }} />

      <Typography variant="caption" color="text.secondary" sx={{ display: "block", textAlign: "center" }}>
        © {new Date().getFullYear()} {profile.name.split(" ")[0]} · Built with React &amp; Material UI
      </Typography>
    </Container>
  </Box>
);

export default Footer;
