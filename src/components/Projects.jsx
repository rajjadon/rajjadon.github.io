import React from 'react';
import { Typography, Paper, Grid, Box, Chip, Link } from '@mui/material';
import { motion } from 'framer-motion';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
      <Typography variant="h4" sx={{
        fontWeight: 700,
        mb: 2,
        pl: 2,
      }}>Projects</Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
        <Grid container spacing={2}>
          {projectsData.map(proj => (
            <Grid item xs={12} md={6} key={proj.name}>
              <Paper sx={{ p: 2, height: "100%", bgcolor: "#202124" }}>
                <Typography variant="h6">{proj.name}</Typography>
                <Typography variant="subtitle2" color="primary">
                  {proj.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.description}
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1, mb: 1 }}>
                  {proj.skills.map(skill => (
                    <Chip key={skill} label={skill} size="small" sx={{ bgcolor: "#2c2f33", color: "#fff" }} />
                  ))}
                </Box>
                <Link href={proj.link} target="_blank" rel="noopener" underline="hover">
                  View on Play Store
                </Link>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default Projects;