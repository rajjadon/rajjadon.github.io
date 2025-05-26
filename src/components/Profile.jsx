import React from 'react';
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { Box, Typography, Button, IconButton, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const Profile = () => (
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
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 1 }}>
            Bengaluru, India
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <IconButton href="mailto:pratap.rajjadon07@gmail.com" color="primary"><EmailIcon fontSize="large" /></IconButton>
            <IconButton href="https://github.com/rajjadon" target="_blank" color="primary"><GitHubIcon fontSize="large" /></IconButton>
            <IconButton href="https://www.linkedin.com/in/raj-pratap-singh-jadon-547801147/" target="_blank" color="primary"><LinkedInIcon fontSize="large" /></IconButton>
            <Button variant="contained" href="/Raj Pratap Singh Resume (1).pdf" target="_blank" sx={{ ml: 2 }} startIcon={<DownloadIcon />}>Resume</Button>
          </Box>
        </Box>
    </motion.div>
);

export default Profile;