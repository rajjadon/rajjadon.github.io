import React from 'react';
import { Typography, Box, Chip, Link, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from '../data/projects.json';

const Projects = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
      <Typography 
          variant="h2" 
          component="h2"
          sx={{ 
            fontSize: { xs: '2rem', sm: '3rem' },
            fontWeight: 700,
            mb: 4,
            color: 'white'
          }}
        >
          Projects
        </Typography>
      <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>

        <Stack spacing={3}>
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Box
                sx={{
                  bgcolor: '#2d2d2d',
                  borderRadius: 3,
                  p: 3,
                  transition: 'transform 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)'
                  }
                }}
              >
                {/* Title and Company */}
                <Box sx={{ mb: 1 }}>
                  <Typography
                    variant="h5"
                    sx={{ 
                      fontWeight: 600,
                      color: '#3b82f6',
                      mb: 0.5
                    }}
                  >
                    {project.name}
                  </Typography>
                  {project.company && (
                    <Typography
                      variant="subtitle1"
                      sx={{ 
                        color: '#94a3b8',
                        mb: 1
                      }}
                    >
                      {project.company}
                    </Typography>
                  )}
                </Box>

                {/* Links Row with Wrap */}
                {(project.link || project.links) && (
                  <Stack
                    direction="row"
                    spacing={2}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ mb: 2 }}
                  >
                    {project.link && (
                      <Link 
                        href={project.link}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: '#3b82f6',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        View <OpenInNewIcon sx={{ fontSize: 16 }} />
                      </Link>
                    )}
                    {project.links && project.links.map((link, i) => (
                      <Link
                        key={i}
                        href={link}
                        target="_blank"
                        rel="noopener"
                        sx={{
                          color: '#3b82f6',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5,
                          whiteSpace: 'nowrap',
                          textDecoration: 'none',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Link {i + 1} <OpenInNewIcon sx={{ fontSize: 16 }} />
                      </Link>
                    ))}
                  </Stack>
                )}

                {/* Description */}
                <Typography
                  variant="body1"
                  sx={{ 
                    color: '#e2e8f0',
                    mb: 2,
                    lineHeight: 1.6
                  }}
                >
                  {project.description}
                </Typography>

                {/* Tech Chips */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      sx={{
                        bgcolor: '#1e1e1e',
                        color: '#94a3b8',
                        fontWeight: 500,
                        '&:hover': {
                          bgcolor: '#3b3b3b'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Paper>
    </motion.div>
  );
};

export default Projects;