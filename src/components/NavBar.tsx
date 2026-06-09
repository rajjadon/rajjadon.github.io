import React, { useEffect, useRef, useState } from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("about");
  const pillRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Keep the active pill in view within the scrollable bar
  useEffect(() => {
    pillRefs.current[activeId]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeId]);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        bgcolor: scrolled ? "rgba(15,23,42,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid" : "1px solid transparent",
        borderColor: scrolled ? "divider" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
        zIndex: 1200,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "lg",
          mx: "auto",
          width: "100%",
          px: { xs: 1.5, sm: 3 },
          gap: 2,
        }}
      >
        <Typography
          variant="h6"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          sx={{
            fontWeight: 800,
            flexShrink: 0,
            background: "linear-gradient(135deg, #6366f1, #22d3ee)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            cursor: "pointer",
          }}
        >
          RPJ
        </Typography>

        {/* Scrollable pill nav — no hamburger, all sections visible/swipeable */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: 0.5,
            overflowX: "auto",
            ml: "auto",
            py: 0.5,
            "&::-webkit-scrollbar": { display: "none" },
            scrollbarWidth: "none",
            maskImage:
              "linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, #000 16px, #000 calc(100% - 16px), transparent 100%)",
          }}
        >
          {NAV_ITEMS.map((item) => {
            const active = activeId === item.id;
            return (
              <Box
                key={item.id}
                component="button"
                ref={(el: HTMLButtonElement | null) => (pillRefs.current[item.id] = el)}
                onClick={() => handleNavClick(item.id)}
                sx={{
                  flexShrink: 0,
                  border: "1px solid",
                  borderColor: active ? "transparent" : "divider",
                  cursor: "pointer",
                  color: active ? "#0f172a" : "text.secondary",
                  background: active
                    ? "linear-gradient(135deg, #6366f1, #22d3ee)"
                    : "transparent",
                  fontSize: "0.8rem",
                  fontWeight: active ? 700 : 500,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  "&:hover": {
                    color: active ? "#0f172a" : "primary.main",
                    borderColor: active ? "transparent" : "primary.main",
                  },
                }}
              >
                {item.label}
              </Box>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
