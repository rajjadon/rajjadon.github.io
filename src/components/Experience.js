import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import experience from '../data/experience.json';

const Experience = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Experience
    </Typography>
    {experience.map((exp, idx) => (
      <Box key={exp.company} sx={{ mb: 3 }}>
        <Typography variant="h6">
          {exp.title} <Typography variant="body2" component="span" color="text.secondary">— {exp.company}, {exp.location}</Typography>
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">{exp.range}</Typography>
        <ul>
          {exp.responsibilities.map((r, i) => (
            <li key={i}><Typography variant="body2">{r}</Typography></li>
          ))}
        </ul>
        {idx < experience.length - 1 && <Divider sx={{ my: 2 }} />}
      </Box>
    ))}
  </Paper>
);

export default Experience;