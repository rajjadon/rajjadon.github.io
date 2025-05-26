import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import education from '../data/education.json';

const Education = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Education
    </Typography>
    {education.map((edu, idx) => (
      <Box key={edu.institution} sx={{ mb: 3 }}>
        <Typography variant="h6">{edu.degree} — {edu.institution}</Typography>
        <Typography variant="subtitle2" color="text.secondary">{edu.range}</Typography>
        <Typography variant="body2">{edu.details}</Typography>
        {idx < education.length - 1 && <Divider sx={{ my: 2 }} />}
      </Box>
    ))}
  </Paper>
);

export default Education;