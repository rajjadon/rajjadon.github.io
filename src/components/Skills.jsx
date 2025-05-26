import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
    >
      <Typography variant="h4" gutterBottom>
        Skills
      </Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {skillsData.map((category) => (
            <Box key={category.title}>
              <Typography
                variant="h6"
                sx={{
                  color: '#3b82f6',
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  mb: 2
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
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      transition: 'all 0.2s ease-in-out',
                      '&:hover': {
                        bgcolor: '#3b3b3b'
                      }
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </motion.div>
  );
};

export default Skills;