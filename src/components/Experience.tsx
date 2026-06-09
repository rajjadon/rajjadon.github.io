import React, { useState } from 'react';
import { Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import experienceData from '../data/experience.json';

const PREVIEW_COUNT = 2;

const ExperienceItem = ({ exp, index }: { exp: typeof experienceData[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? exp.responsibilities : exp.responsibilities.slice(0, PREVIEW_COUNT);
  const hasMore = exp.responsibilities.length > PREVIEW_COUNT;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Box sx={{ display: "flex", gap: 3 }}>
        {/* Timeline line + dot */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              bgcolor: "rgba(99,102,241,0.15)",
              border: "2px solid #6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <WorkOutlineIcon sx={{ fontSize: 16, color: "primary.main" }} />
          </Box>
          {index < experienceData.length - 1 && (
            <Box sx={{ width: 2, flex: 1, bgcolor: "#334155", mt: 1, mb: 0, minHeight: 32 }} />
          )}
        </Box>

        {/* Content */}
        <Box sx={{ pb: 4, flex: 1 }}>
          <Box sx={{ display: "flex", alignItems: "flex-start", flexWrap: "wrap", gap: 1, mb: 0.5 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
              {exp.title}
            </Typography>
            <Chip
              label={exp.range}
              size="small"
              sx={{
                bgcolor: "rgba(34,211,238,0.1)",
                color: "secondary.main",
                border: "1px solid rgba(34,211,238,0.3)",
                fontSize: "0.7rem",
                height: 22,
              }}
            />
          </Box>

          <Typography variant="body2" sx={{ color: "primary.main", fontWeight: 600, mb: 0.5 }}>
            {exp.company}
          </Typography>
          <Typography variant="caption" color="text.secondary" sx={{ display: "block", mb: 1.5 }}>
            {exp.location}
          </Typography>

          <Box component="ul" sx={{ m: 0, pl: 2 }}>
            {visible.map((r, i) => (
              <Typography
                key={i}
                component="li"
                variant="body2"
                color="text.secondary"
                sx={{ mb: 0.5, lineHeight: 1.6 }}
              >
                {r}
              </Typography>
            ))}
          </Box>

          {hasMore && (
            <Typography
              variant="body2"
              onClick={() => setExpanded(!expanded)}
              sx={{
                mt: 1,
                color: "primary.main",
                cursor: "pointer",
                display: "inline-block",
                fontWeight: 500,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {expanded ? "Show less ↑" : `Show ${exp.responsibilities.length - PREVIEW_COUNT} more ↓`}
            </Typography>
          )}
        </Box>
      </Box>
    </motion.div>
  );
};

const Experience = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="experience" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Experience</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Where I've worked and what I've built
      </Typography>

      <Box>
        {experienceData.map((exp, index) => (
          <ExperienceItem key={exp.company} exp={exp} index={index} />
        ))}
      </Box>
    </Box>
  </motion.div>
);

export default Experience;
