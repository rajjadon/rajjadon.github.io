import React, { useState } from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, IconButton, Button, Divider } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import BuildIcon from '@mui/icons-material/Build';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import EmailIcon from '@mui/icons-material/Email';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

const drawerWidth = 240;

const sections = [
  { label: 'About', icon: <InfoIcon />, component: <About /> },
  { label: 'Skills', icon: <BuildIcon />, component: <Skills /> },
  { label: 'Experience', icon: <WorkIcon />, component: <Experience /> },
  { label: 'Projects', icon: <BuildIcon />, component: <Projects /> },
  { label: 'Education', icon: <SchoolIcon />, component: <Education /> },
  { label: 'Contact', icon: <EmailIcon />, component: <Contact /> },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', bgcolor: 'background.default' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', mt: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
            <Typography variant="h6" color="primary">Raj Pratap Singh Jadon</Typography>
            <Typography variant="body2" color="textSecondary">SDE-2, Android | Bengaluru, India</Typography>
            <Button
              variant="contained"
              href="/resume.pdf"
              target="_blank"
              startIcon={<DownloadIcon />}
              sx={{ mt: 2, mb: 2, width: '80%' }}
            >
              Download Resume
            </Button>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
              <IconButton href="https://github.com/rajjadon" target="_blank" size="small" color="primary">
                <GitHubIcon />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/raj-pratap-singh-jadon-547801147" target="_blank" size="small" color="primary">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Box>
          <Divider />
          <List>
            {sections.map((section, index) => (
              <ListItem button key={section.label} selected={selectedIndex === index} onClick={() => setSelectedIndex(index)}>
                <ListItemIcon>{section.icon}</ListItemIcon>
                <ListItemText primary={section.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.paper', p: 3, minHeight: '100vh' }}>
        <Toolbar />
        {sections[selectedIndex].component}
      </Box>
    </Box>
  );
}

export default App;