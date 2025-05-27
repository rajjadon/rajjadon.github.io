import React from 'react';
import { Typography, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import educationData from '../data/education.json';

const Education = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
      <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 2,
        pl: 2,
      }}>Education</Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
        {educationData.map(edu => (
          <Box key={edu.degree} mb={2}>
            <Typography variant="h6">{edu.degree} — {edu.institution}</Typography>
            <Typography variant="subtitle2" color="text.secondary">{edu.range}</Typography>
            <Typography variant="body2" color="text.secondary">{edu.details}</Typography>
          </Box>
        ))}
      </Paper>
    </motion.div>
  );
};

export default Education;