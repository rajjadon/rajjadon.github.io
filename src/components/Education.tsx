import React from 'react';
import { Typography, Paper, Box, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import educationData from '../data/education.json';

const Education = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="education" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Education</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Academic background
      </Typography>

      <Grid container spacing={3}>
        {educationData.map((edu, index) => (
          <Grid item xs={12} sm={6} key={edu.degree}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "border-color 0.2s",
                  "&:hover": { borderColor: "#6366f1" },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "rgba(99,102,241,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2,
                  }}
                >
                  <SchoolIcon sx={{ color: "primary.main", fontSize: 22 }} />
                </Box>

                <Typography variant="h5" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {edu.degree}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.5 }}>
                  {edu.institution}
                </Typography>

                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Chip
                    label={edu.range}
                    size="small"
                    sx={{
                      bgcolor: "rgba(34,211,238,0.1)",
                      color: "secondary.main",
                      border: "1px solid rgba(34,211,238,0.3)",
                      fontSize: "0.7rem",
                      height: 22,
                    }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {edu.details}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  </motion.div>
);

export default Education;
