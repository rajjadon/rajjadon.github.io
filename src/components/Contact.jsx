import React from 'react';
import { Box, Typography, Paper, Button, Link } from '@mui/material';
import contact from '../data/contact.json';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => (
  <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Feel free to reach out if you want to collaborate, discuss Android, or just connect!
    </Typography>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
      <PhoneIcon color="primary" />
      <Typography variant="body2">
        <Link href="tel:+918296945219">+91 8296945219</Link>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
      <WhatsAppIcon color="primary" />
      <Typography variant="body2">
        <Link href="https://wa.me/918296945219" target="_blank" rel="noopener">
          WhatsApp Chat
        </Link>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
      <EmailIcon color="primary" />
      <Typography variant="body2">
        <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 2 }}>
      <LinkedInIcon color="primary" />
      <Typography variant="body2">
        <Link href={contact.linkedin} target="_blank" rel="noopener">
          LinkedIn
        </Link>
      </Typography>
    </Box>
  </Paper>
);

export default Contact;