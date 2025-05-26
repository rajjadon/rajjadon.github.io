import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Chip,
  Link,
  Paper,
  Divider,
  Grid,
  IconButton,
  Avatar
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

// ====== YOUR DATA BELOW (move to JSON if you wish) ======
const skills = [
  {
    title: "Languages",
    items: ["Kotlin", "Java", "Dart", "JavaScript"]
  },
  {
    title: "Frameworks & Tools",
    items: [
      "Android SDK", "Jetpack Compose", "Flutter", "Retrofit",
      "Firebase", "Kotlin Coroutines", "KMP", "Dagger Hilt", "Koin"
    ]
  },
  {
    title: "Other",
    items: [
      "Clean Architecture", "MVVM", "Data Structures",
      "Dependency Injection", "Git"
    ]
  }
];

const experience = [
  {
    title: "SDE - 2, Android",
    company: "Fynd (Shopsense Retail Technologies Ltd.)",
    duration: "Oct 2022 – Present",
    description: [
      "Develop and maintain Android applications, focusing on high performance and quality.",
      "Implement new features with modern Android tools (Kotlin, Jetpack Compose, Clean Architecture).",
      "Collaborate with cross-functional teams for smooth delivery.",
      "Mentor junior engineers and participate in code reviews."
    ]
  },
  {
    title: "SDE 1, Android",
    company: "Ola Electric",
    duration: "June 2022 – Sep 2022",
    description: [
      "Developed and maintained the Ola Bike companion app.",
      "Implemented new features using Kotlin and modern best practices.",
      "Ensured application performance and quality."
    ]
  },
  {
    title: "Senior Android Developer",
    company: "Primathon",
    duration: "Dec 2021 – May 2022",
    description: [
      "Led Android app development for multiple products.",
      "Mentored junior developers and conducted code reviews."
    ]
  },
  {
    title: "Android Developer",
    company: "Applaunch.io",
    duration: "Nov 2020 – Dec 2021",
    description: [
      "Developed Android apps for various clients.",
      "Participated in app design, architecture, and testing."
    ]
  },
  {
    title: "Android Developer",
    company: "SchoolMitra",
    duration: "Jan 2019 – Nov 2020",
    description: [
      "Developed educational Android applications.",
      "Implemented user-friendly interfaces and conducted testing/debugging."
    ]
  }
];

const projects = [
  {
    name: "JioMart Partner",
    company: "Fynd",
    description: "B2B business app for wholesale shopping needs at competitive prices.",
    skills: ["Kotlin", "Android", "Coroutines"],
    link: "https://play.google.com/store/apps/details?id=com.jiomart.partner"
  },
  {
    name: "Ola Electric Companion App",
    company: "Ola Electric",
    description: "Official companion app for Ola Bike.",
    skills: ["Kotlin", "Android", "Dependency Injection"],
    link: "https://play.google.com/store/apps/details?id=com.olaelectric.olacabs"
  },
  {
    name: "Probo",
    company: "Primathon",
    description: "Contributed to the development and improvement of the Probo prediction market app.",
    skills: ["Kotlin", "Android", "MVVM"],
    link: "https://play.google.com/store/apps/details?id=app.probo.probo"
  },
  {
    name: "Fynd Store",
    company: "Fynd",
    description: "Retail and fashion app for online shopping with a seamless experience.",
    skills: ["Kotlin", "Android", "Jetpack Compose"],
    link: "https://play.google.com/store/apps/details?id=shop.fynd.store"
  }
];

const education = [
  {
    degree: "M.C.A.",
    institution: "Madhav Institute of Technology and Science, Gwalior",
    year: "2016 – 2019"
  },
  {
    degree: "B.C.A.",
    institution: "GICTS College of Professional Education, Gwalior",
    year: "2013 – 2016"
  }
];

// ====== COMPONENT START ======
export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: { xs: 2, sm: 4 } }}>
      {/* HERO */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{
            minHeight: 320,
            bgcolor: "background.paper",
            boxShadow: 2,
            borderRadius: 6,
            mb: 4,
            p: { xs: 2, sm: 5 }
          }}
        >
          <Avatar
            src="/profile.jpg"
            alt="Raj Pratap Singh Jadon"
            sx={{
              width: 140,
              height: 140,
              mb: 2,
              boxShadow: 4,
              border: "5px solid #0a66c2"
            }}
          />
          <Typography variant="h2" fontWeight={800} color="primary" align="center" sx={{ letterSpacing: -1 }}>
            Raj Pratap Singh Jadon
          </Typography>
          <Typography variant="h5" color="text.secondary" align="center" sx={{ mt: 1 }}>
            SDE-2, Android • Fynd • Ex Ola Electric
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" align="center" sx={{ mb: 1 }}>
            Bengaluru, India
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <IconButton href="mailto:pratap.rajjadon07@gmail.com" color="primary"><EmailIcon fontSize="large" /></IconButton>
            <IconButton href="https://github.com/rajjadon" target="_blank" color="primary"><GitHubIcon fontSize="large" /></IconButton>
            <IconButton href="https://www.linkedin.com/in/raj-pratap-singh-jadon-547801147/" target="_blank" color="primary"><LinkedInIcon fontSize="large" /></IconButton>
            <Button variant="contained" href="/resume.pdf" target="_blank" sx={{ ml: 2 }} startIcon={<DownloadIcon />}>Resume</Button>
          </Box>
        </Box>
      </motion.div>

      {/* ABOUT */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 2,
          pl: 2,
        }}>About</Typography>
        <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
          <Typography variant="body1" color="text.secondary">
            Dynamic Android Engineer with over 6 years of experience in crafting and optimizing high-quality mobile applications. Proven expertise in Kotlin, Jetpack Compose, and Clean Architecture fosters innovative solutions tailored to user needs. Passionate about creating applications that enhance user experiences, mentoring teams, and continuously adapting to emerging technologies.
          </Typography>
        </Paper>
      </motion.div>

{/* Experience */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
  <Typography variant="h4" sx={{
    fontWeight: 700,
    mb: 2,
    pl: 2,
  }}>Experience</Typography>
  <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
    <Grid container spacing={3}>
      {experience.map(exp => (
        <Grid item xs={12} key={exp.company}>
          <Paper sx={{ p: 2, height: "100%", bgcolor: "#202124", mb: 2 }}>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography variant="subtitle2" color="primary">
              {exp.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.duration}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mt: 1, mb: 1 }}>
              {exp.description.map((desc, index) => (
                <Typography key={index} variant="body2" color="text.secondary" sx={{ width: "100%" }}>
                  • {desc}
                </Typography>
              ))}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Paper>
</motion.div>

      {/* SKILLS */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 2,
          pl: 2,
        }}>Skills</Typography>
        <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
          <Grid container spacing={2}>
            {skills.map(category => (
              <Grid item xs={12} sm={6} md={4} key={category.title}>
                <Typography variant="h6" sx={{ color: "#0a66c2", mb: 1 }}>{category.title}</Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {category.items.map(skill => (
                    <Chip key={skill} label={skill} sx={{ fontWeight: 600, bgcolor: "#222", color: "#fff" }} />
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </motion.div>

      {/* PROJECTS */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 2,
          pl: 2,
        }}>Projects</Typography>
        <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
          <Grid container spacing={2}>
            {projects.map(proj => (
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

      {/* EDUCATION */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 2,
          pl: 2,
        }}>Education</Typography>
        <Paper elevation={4} sx={{ p: 3, mb: 5, borderRadius: 4, bgcolor: "background.paper" }}>
          {education.map(edu => (
            <Box key={edu.degree} mb={2}>
              <Typography variant="h6">{edu.degree} — {edu.institution}</Typography>
              <Typography variant="subtitle2" color="text.secondary">{edu.year}</Typography>
            </Box>
          ))}
        </Paper>
      </motion.div>

      {/* CONTACT */}
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
        <Typography variant="h4" sx={{
          fontWeight: 700,
          mb: 2,
          pl: 2,
        }}>Contact</Typography>
        <Paper elevation={4} sx={{ p: 3, borderRadius: 4, bgcolor: "background.paper" }}>
          <Typography>
            Email:{" "}
            <Link href="mailto:pratap.rajjadon07@gmail.com">
              pratap.rajjadon07@gmail.com
            </Link>
          </Typography>
          <Typography>
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/raj-pratap-singh-jadon-547801147"
              target="_blank"
            >
              Profile
            </Link>
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
}