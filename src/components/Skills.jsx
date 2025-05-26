import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  const categories = [
    { title: 'Languages', items: skillsData.languages },
    { title: 'Mobile Development', items: skillsData.mobile },
    { title: 'Architecture', items: skillsData.architecture },
    { title: 'Tools & Libraries', items: skillsData.tools },
    { title: 'DevOps', items: skillsData.devOps },
    { title: 'AI & Integration', items: skillsData.ai }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.9 }}
    >
      <Paper 
        elevation={4} 
        sx={{ 
          p: 3, 
          mb: 5, 
          borderRadius: 4, 
          bgcolor: "#1e1e1e",
          color: "white" 
        }}
      >
        <Typography 
          variant="h4" 
          gutterBottom
          sx={{ 
            color: '#3b82f6',
            fontWeight: 600,
            mb: 4
          }}
        >
          Skills
        </Typography>

        <Grid container spacing={4}>
          {categories.map((category, index) => (
            <Grid item xs={12} sm={6} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    mb: 2,
                    color: '#94a3b8'
                  }}
                >
                  {category.title}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 1
                  }}
                >
                  {category.items.map((skill) => (
                    <Box
                      key={skill}
                      component={motion.div}
                      whileHover={{ scale: 1.05 }}
                      sx={{
                        bgcolor: '#2d2d2d',
                        color: '#e2e8f0',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          bgcolor: '#3b3b3b',
                          color: '#3b82f6'
                        }
                      }}
                    >
                      {skill}
                    </Box>
                  ))}
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
};

export default Skills;