import React from 'react';
import { Typography, Paper, Grid, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
      <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 2,
        pl: 2,
      }}>Skills</Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
        <Grid container spacing={2}>
          {skillsData.map(category => (
            <Grid item xs={12} sm={6} md={4} key={category.title}>
              <Typography variant="h6" sx={{ color: "#0a66c2", mb: 1 }}>{category.title}</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {category.items.map(skill => (
                  <Chip key={skill} label={skill} sx={{ fontWeight: 600, bgcolor: "#222", color: "#fff" }} />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default Skills;