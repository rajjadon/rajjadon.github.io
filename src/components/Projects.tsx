import React from 'react';
import { Typography, Box, Chip, Link, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from '../data/projects.json';

const extractUrl = (markdownLink: string) => {
  const match = markdownLink.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : markdownLink;
};

const getLinkLabel = (project: typeof projectsData[number], link: string, i: number) => {
  if (project.name === 'Kaily.ai') {
    if (link.includes('docs.kaily.ai')) return 'Docs';
    if (link.includes('kaily.ai')) return 'Website';
  }
  if (project.name === 'Pixelbin Suite') {
    if (link.includes('upscale.media')) return 'Upscale.media';
    if (link.includes('watermarkremover.io')) return 'Watermarkremover.io';
    if (link.includes('erase.bg')) return 'Erase.bg';
    if (link.includes('shrink.media')) return 'Shrink.media';
    if (link.includes('convertfiles.ai')) return 'ConvertFiles.ai';
  }
  return `Link ${i + 1}`;
};

const Projects = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <Box id="projects" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Projects</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Apps and platforms I've built or led
      </Typography>

      <Grid container spacing={3}>
        {projectsData.map((project, index) => {
          const projectUrl = project.name_link ? extractUrl(project.name_link) : null;
          const links = project.links ?? (project.link ? [project.link] : []);
          const clients = (project as { clients?: string[] }).clients ?? [];

          return (
            <Grid item xs={12} md={6} key={project.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.1 }}
                style={{ height: "100%" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 32px rgba(99,102,241,0.15)",
                      borderColor: "#6366f1",
                    },
                  }}
                >
                  {/* Header */}
                  <Box sx={{ mb: 1.5 }}>
                    <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 1 }}>
                      <Typography
                        variant="h6"
                        component={projectUrl ? Link : "h6"}
                        href={projectUrl ?? undefined}
                        target={projectUrl ? "_blank" : undefined}
                        rel={projectUrl ? "noopener noreferrer" : undefined}
                        sx={{
                          fontWeight: 700,
                          color: "text.primary",
                          textDecoration: "none",
                          "&:hover": { color: "primary.main" },
                          lineHeight: 1.3,
                        }}
                      >
                        {project.name}
                        {projectUrl && (
                          <OpenInNewIcon sx={{ fontSize: 14, ml: 0.5, verticalAlign: "middle", opacity: 0.6 }} />
                        )}
                      </Typography>
                    </Box>
                    {project.company && (
                      <Chip
                        label={project.company}
                        size="small"
                        sx={{
                          mt: 0.5,
                          bgcolor: "rgba(99,102,241,0.1)",
                          color: "primary.main",
                          border: "1px solid rgba(99,102,241,0.25)",
                          fontSize: "0.7rem",
                          height: 20,
                        }}
                      />
                    )}
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2, lineHeight: 1.7, flex: 1 }}
                  >
                    {project.description}
                  </Typography>

                  {/* Trusted-by clients */}
                  {clients.length > 0 && (
                    <Box sx={{ mb: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          display: "block",
                          mb: 0.75,
                          color: "text.secondary",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          fontWeight: 700,
                          fontSize: "0.65rem",
                        }}
                      >
                        Powering AI agents for
                      </Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                        {clients.map((client) => (
                          <Chip
                            key={client}
                            label={client}
                            size="small"
                            sx={{
                              bgcolor: "rgba(34,211,238,0.1)",
                              color: "secondary.main",
                              border: "1px solid rgba(34,211,238,0.3)",
                              fontWeight: 600,
                              fontSize: "0.7rem",
                              height: 22,
                            }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {/* Extra links (multi-link projects) */}
                  {links.length > 1 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                      {links.map((link, i) => (
                        <Link
                          key={i}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          underline="none"
                          sx={{
                            fontSize: "0.75rem",
                            color: "secondary.main",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.25,
                            "&:hover": { textDecoration: "underline" },
                          }}
                        >
                          {getLinkLabel(project, link, i)}
                          <OpenInNewIcon sx={{ fontSize: 12 }} />
                        </Link>
                      ))}
                    </Box>
                  )}

                  {/* Tech chips */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: "rgba(51,65,85,0.6)",
                          color: "text.secondary",
                          fontSize: "0.7rem",
                          height: 22,
                          border: "1px solid #334155",
                          "&:hover": { bgcolor: "rgba(99,102,241,0.15)", color: "primary.main" },
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  </motion.div>
);

export default Projects;
