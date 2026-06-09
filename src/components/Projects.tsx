import React from 'react';
import { Typography, Box, Chip, Link, Paper, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from '../data/projects.json';

type Project = typeof projectsData[number];

const GRADIENTS = [
  "linear-gradient(135deg, #6366f1, #22d3ee)",
  "linear-gradient(135deg, #8b5cf6, #ec4899)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #10b981, #22d3ee)",
  "linear-gradient(135deg, #3b82f6, #6366f1)",
  "linear-gradient(135deg, #14b8a6, #84cc16)",
  "linear-gradient(135deg, #ec4899, #8b5cf6)",
  "linear-gradient(135deg, #f43f5e, #f59e0b)",
];

const extractUrl = (markdownLink: string) => {
  const match = markdownLink.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : markdownLink;
};

const getLinkLabel = (project: Project, link: string, i: number) => {
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

const getLinks = (p: Project) => p.links ?? (p.link ? [p.link] : []);
const getClients = (p: Project) => (p as { clients?: string[] }).clients ?? [];

/* ---------- Featured (Kaily.ai) hero card ---------- */
const FeaturedCard = ({ project }: { project: Project }) => {
  const url = project.name_link ? extractUrl(project.name_link) : null;
  const links = getLinks(project);
  const clients = getClients(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 4,
          mb: 3,
          p: { xs: 3, md: 4 },
          border: "1px solid rgba(99,102,241,0.4)",
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.12), rgba(34,211,238,0.06))",
        }}
      >
        {/* glow accent */}
        <Box
          aria-hidden
          sx={{
            position: "absolute",
            top: -60,
            right: -40,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(34,211,238,0.25), transparent 70%)",
            filter: "blur(30px)",
            pointerEvents: "none",
          }}
        />
        <Box sx={{ position: "relative" }}>
          <Box sx={{ mb: 1.5 }}>
            <Chip
              label="★ Flagship Product"
              size="small"
              sx={{
                bgcolor: "rgba(34,211,238,0.15)",
                color: "#22d3ee",
                border: "1px solid rgba(34,211,238,0.4)",
                fontWeight: 700,
                fontSize: "0.68rem",
              }}
            />
          </Box>
          <Typography
            variant="h3"
            component={url ? Link : "h3"}
            href={url ?? undefined}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener noreferrer" : undefined}
            sx={{
              display: "block",
              fontWeight: 800,
              fontSize: { xs: "2rem", md: "2.6rem" },
              lineHeight: 1.25,
              pb: "0.12em",
              textDecoration: "none",
              width: "fit-content",
              background: "linear-gradient(135deg, #6366f1, #22d3ee)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 2.5, maxWidth: 720, lineHeight: 1.7 }}>
            {project.description}
          </Typography>

          {clients.length > 0 && (
            <Box sx={{ mb: 2.5 }}>
              <Typography
                variant="caption"
                sx={{
                  display: "block", mb: 1, color: "text.secondary",
                  textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, fontSize: "0.65rem",
                }}
              >
                Powering AI agents for
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {clients.map((client) => (
                  <Chip
                    key={client}
                    label={client}
                    sx={{
                      bgcolor: "rgba(15,23,42,0.6)",
                      color: "text.primary",
                      border: "1px solid rgba(34,211,238,0.35)",
                      fontWeight: 600,
                      fontSize: "0.78rem",
                    }}
                  />
                ))}
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2.5 }}>
            {links.map((link, i) => (
              <Button
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                size="small"
                variant="outlined"
                endIcon={<OpenInNewIcon sx={{ fontSize: 14 }} />}
                sx={{
                  textTransform: "none", borderRadius: 999, fontWeight: 600,
                  borderColor: "rgba(99,102,241,0.5)", color: "text.primary",
                  "&:hover": { borderColor: "#6366f1", bgcolor: "rgba(99,102,241,0.1)" },
                }}
              >
                {getLinkLabel(project, link, i)}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {project.tech.map((tech) => (
              <Chip key={tech} label={tech} size="small"
                sx={{ bgcolor: "rgba(51,65,85,0.6)", color: "text.secondary", fontSize: "0.7rem", height: 22, border: "1px solid #334155" }}
              />
            ))}
          </Box>
        </Box>
      </Paper>
    </motion.div>
  );
};

/* ---------- Standard project card ---------- */
const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const url = project.name_link ? extractUrl(project.name_link) : null;
  const links = getLinks(project);
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      style={{ height: "100%" }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 2.5,
          borderRadius: 3,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 32px rgba(99,102,241,0.18)",
            borderColor: "#6366f1",
          },
        }}
      >
        {/* Header: gradient letter avatar + title */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1.5 }}>
          <Box
            sx={{
              width: 44, height: 44, borderRadius: 2, flexShrink: 0,
              display: "flex", alignItems: "center", justifyContent: "center",
              background: gradient, color: "#0f172a", fontWeight: 800, fontSize: "1.2rem",
            }}
          >
            {project.name.charAt(0)}
          </Box>
          <Box sx={{ minWidth: 0 }}>
            <Typography
              variant="subtitle1"
              component={url ? Link : "div"}
              href={url ?? undefined}
              target={url ? "_blank" : undefined}
              rel={url ? "noopener noreferrer" : undefined}
              sx={{
                fontWeight: 700, lineHeight: 1.2, color: "text.primary", textDecoration: "none",
                display: "block", "&:hover": { color: "primary.main" },
              }}
            >
              {project.name}
              {url && <OpenInNewIcon sx={{ fontSize: 13, ml: 0.5, verticalAlign: "middle", opacity: 0.6 }} />}
            </Typography>
            {project.company && (
              <Typography variant="caption" sx={{ color: "primary.main", fontWeight: 600 }}>
                {project.company}
              </Typography>
            )}
          </Box>
        </Box>

        {/* Description (clamped) */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2, lineHeight: 1.6, flex: 1,
            display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
          }}
        >
          {project.description}
        </Typography>

        {/* Tech chips (limited) */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: links.length ? 1.5 : 0 }}>
          {project.tech.slice(0, 5).map((tech) => (
            <Chip key={tech} label={tech} size="small"
              sx={{ bgcolor: "rgba(51,65,85,0.6)", color: "text.secondary", fontSize: "0.65rem", height: 20, border: "1px solid #334155" }}
            />
          ))}
          {project.tech.length > 5 && (
            <Chip label={`+${project.tech.length - 5}`} size="small"
              sx={{ bgcolor: "transparent", color: "text.secondary", fontSize: "0.65rem", height: 20, border: "1px dashed #334155" }}
            />
          )}
        </Box>

        {/* Links */}
        {links.length > 0 && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
            {links.map((link, i) => (
              <Link
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  fontSize: "0.72rem", color: "secondary.main", fontWeight: 600,
                  display: "inline-flex", alignItems: "center", gap: 0.25,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                {getLinkLabel(project, link, i)} <OpenInNewIcon sx={{ fontSize: 11 }} />
              </Link>
            ))}
          </Box>
        )}
      </Paper>
    </motion.div>
  );
};

const Projects = () => {
  const featured = projectsData[0];
  const rest = projectsData.slice(1);

  return (
    <Box id="projects" sx={{ mb: 8 }}>
      <Typography variant="h4" sx={{ mb: 1 }}>Projects</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
        Apps and platforms I've built or led
      </Typography>

      <FeaturedCard project={featured} />

      <Grid container spacing={2.5}>
        {rest.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={project.name}>
            <ProjectCard project={project} index={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
