import React from 'react';
import { Box, Typography, Chip, Paper, Grid } from '@mui/material';
import skills from '../data/skills.json';

const Skills = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Skills
    </Typography>
    <Grid container spacing={2}>
      {skills.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.title}>
          <Typography variant="h6" color="primary">{category.title}</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
            {category.items.map((skill) => (
              <Chip key={skill} label={skill} color="secondary" variant="outlined" />
            ))}
          </Box>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default Skills;