import React from 'react';
import { Typography, Paper, Stack, Box } from '@mui/material';
import { motion } from 'framer-motion';
import experienceData from '../data/experience.json';

const Experience = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
      <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 2,
        pl: 2,
      }}>Experience</Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
        <Stack spacing={2}>
          {experienceData.map(exp => (
            <Paper key={exp.company} sx={{ p: 2, bgcolor: "#202124" }}>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle2" color="primary">
                {exp.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {exp.range}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1, mb: 1 }}>
                {exp.responsibilities.map((responsibility, index) => (
                  <Typography key={index} variant="body2" color="text.secondary">
                    • {responsibility}
                  </Typography>
                ))}
              </Box>
            </Paper>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default Experience;