import React from 'react';
import { Box, Typography, Paper, Chip, Link, Grid } from '@mui/material';
import projects from '../data/projects.json';

const Projects = () => (
  <Paper elevation={2} sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      Projects
    </Typography>
    <Grid container spacing={3}>
      {projects.map((project) => (
        <Grid item xs={12} md={6} key={project.name}>
          <Paper sx={{ p: 2, height: '100%' }}>
            <Typography variant="h6">{project.name}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{project.company}</Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>{project.description}</Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
              {project.skills.map((skill) => (
                <Chip key={skill} label={skill} size="small" />
              ))}
            </Box>
            {project.link && (
              <Link href={project.link} target="_blank" rel="noopener" underline="hover">
                View on Play Store
              </Link>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

export default Projects;