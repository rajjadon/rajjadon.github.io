import React from 'react';
import { Box, Typography, Paper, Button, Link } from '@mui/material';
import contact from '../data/contact.json';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => (
  <Paper elevation={2} sx={{ p: 3, maxWidth: 600 }}>
    <Typography variant="h4" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1" sx={{ mb: 2 }}>
      Feel free to reach out if you want to collaborate, discuss Android, or just connect!
    </Typography>
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
    <Button variant="contained" href="/resume.pdf" target="_blank" sx={{ mt: 2 }}>
      Download Resume
    </Button>
  </Paper>
);

export default Contact;