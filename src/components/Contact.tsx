import React from 'react';
import { Box, Typography, Paper, Link, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import contact from '../data/contact.json';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Contact = () => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9 }}
  >
    <Paper 
      elevation={4} 
      sx={{ 
        p: 3, 
        mb: 5, 
        borderRadius: 4, 
        bgcolor: "#1e1e1e",
        color: "white"
      }}
    >
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          color: '#3b82f6',
          fontWeight: 600
        }}
      >
        Contact
      </Typography>
      
      <Stack spacing={2.5}>
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <LocationOnIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">{contact.location}</Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <PhoneIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">
            <Link 
              href={`tel:${contact.phone}`}
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#3b82f6' }
              }}
            >
              {contact.phone}
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <WhatsAppIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">
            <Link 
              href={`https://wa.me/${contact.phone.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener"
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#3b82f6' }
              }}
            >
              WhatsApp Chat
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <EmailIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">
            <Link 
              href={`mailto:${contact.email}`}
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#3b82f6' }
              }}
            >
              {contact.email}
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <LinkedInIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">
            <Link 
              href={contact.linkedin}
              target="_blank"
              rel="noopener"
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#3b82f6' }
              }}
            >
              LinkedIn Profile
            </Link>
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <GitHubIcon sx={{ color: '#3b82f6' }} />
          <Typography variant="body1">
            <Link 
              href={contact.github}
              target="_blank"
              rel="noopener"
              sx={{ 
                color: 'white',
                textDecoration: 'none',
                '&:hover': { color: '#3b82f6' }
              }}
            >
              GitHub Profile
            </Link>
          </Typography>
        </Box>
      </Stack>
    </Paper>
  </motion.div>
);

export default Contact;