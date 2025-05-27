import React from 'react';
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, Typography, IconButton, Avatar, Button, Tooltip } from "@mui/material";
import { motion } from "framer-motion";

const Profile = () => {
  const handlePhoneClick = () => {
    window.location.href = 'tel:+918296945219';
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:pratap.rajjadon07@gmail.com';
  };

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: 320,
            bgcolor: "background.paper",
            boxShadow: 2,
            borderRadius: 6,
            mb: 4,
            p: { xs: 2, sm: 5 }
          }}
        >
          <Avatar
            src="/profile.jpg"
            alt="Raj Pratap Singh Jadon"
            sx={{
              width: 140,
              height: 140,
              mb: 2,
              boxShadow: 4,
              border: "5px solid #0a66c2"
            }}
          />
          <Typography variant="h2" fontWeight={800} color="primary" align="center" sx={{ letterSpacing: -1 }}>
            Raj Pratap Singh Jadon
          </Typography>
          <Typography variant="h5" color="text.secondary" align="center" sx={{ mt: 1 }}>
            SDE-2, Android • Fynd • Ex Ola Electric
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 3 }}>
            Bengaluru, India
          </Typography>
          
          <Button 
            variant="contained" 
            href="https://drive.google.com/drive/folders/1k9QBuoWsK6i_PRywvFrivnnvCIGusdFy?usp=sharing"
            target="_blank"
            startIcon={<DownloadIcon />}
            sx={{ 
              mb: 3,
              px: 4,
              py: 1,
              borderRadius: 2,
              fontSize: "1.1rem",
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#0a66c2",
              '&:hover': {
                bgcolor: "#084d93"
              }
            }}
          >
            Download Resume
          </Button>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            <Tooltip title="Call +91 8296945219">
              <IconButton onClick={handlePhoneClick} color="primary">
                <PhoneIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Chat on WhatsApp">
              <IconButton href="https://wa.me/918296945219" target="_blank" color="primary">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="pratap.rajjadon07@gmail.com">
              <IconButton onClick={handleEmailClick} color="primary">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="View GitHub Profile">
              <IconButton href="https://github.com/rajjadon" target="_blank" color="primary">
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Tooltip>
            <Tooltip title="View LinkedIn Profile">
              <IconButton href="https://www.linkedin.com/in/raj-pratap-singh-jadon-547801147/" target="_blank" color="primary">
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
    </motion.div>
  );
};

export default Profile;