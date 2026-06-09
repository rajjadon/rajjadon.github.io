import React from 'react';
import { Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json';

const CATEGORIES = [
  { key: 'languages' as const, label: 'Languages', icon: '⚡' },
  { key: 'mobile' as const, label: 'Mobile', icon: '📱' },
  { key: 'architecture' as const, label: 'Architecture', icon: '🏗️' },
  { key: 'tools' as const, label: 'Tools & Libraries', icon: '🔧' },
  { key: 'devOps' as const, label: 'DevOps', icon: '🚀' },
  { key: 'ai' as const, label: 'AI & Integration', icon: '🤖' },
];

const Skills = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="skills" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Skills</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Technologies and tools I work with
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {CATEGORIES.map((cat, catIndex) => (
          <motion.div
            key={cat.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.06 }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  mb: 1.5,
                  color: "text.primary",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  letterSpacing: "0.01em",
                }}
              >
                <Box component="span" sx={{ fontSize: "1.25rem" }}>{cat.icon}</Box>
                {cat.label}
                <Box component="span" sx={{ color: "secondary.main", fontWeight: 600, fontSize: "0.8rem" }}>
                  {skillsData[cat.key].length}
                </Box>
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {skillsData[cat.key].map((skill) => (
                  <Box
                    key={skill}
                    component={motion.div}
                    whileHover={{ scale: 1.05 }}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 2,
                      fontSize: "0.82rem",
                      fontWeight: 500,
                      bgcolor: "background.paper",
                      color: "text.secondary",
                      border: "1px solid #334155",
                      cursor: "default",
                      transition: "all 0.15s ease",
                      "&:hover": {
                        bgcolor: "rgba(99,102,241,0.12)",
                        color: "primary.main",
                        borderColor: "rgba(99,102,241,0.4)",
                      },
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  </motion.div>
);

export default Skills;
