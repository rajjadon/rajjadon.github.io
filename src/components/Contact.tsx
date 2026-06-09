import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import contact from '../data/contact.json';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="contact" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>
        Get In Touch
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Open to new opportunities and conversations
      </Typography>

      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, sm: 5 },
          borderRadius: 3,
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(34,211,238,0.05) 100%)",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Let's build something great together
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
            mb: 3,
            color: "text.secondary",
          }}
        >
          <LocationOnIcon sx={{ fontSize: 16 }} />
          <Typography variant="body2">{contact.location}</Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 440, mx: "auto" }}>
          I'm currently open to senior Android, mobile, or AI engineering roles. The best way to
          reach me is via LinkedIn.
        </Typography>

        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button
            variant="contained"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<LinkedInIcon />}
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#6366f1",
              "&:hover": { bgcolor: "#4f46e5" },
            }}
          >
            Message on LinkedIn
          </Button>

          <Button
            variant="outlined"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            startIcon={<GitHubIcon />}
            sx={{
              px: 4,
              py: 1.5,
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
            View GitHub
          </Button>
        </Box>
      </Paper>
    </Box>
  </motion.div>
);

export default Contact;
