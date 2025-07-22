import React from "react";
import { Grid } from "@mui/material";

import { Typography, CardContent, Card } from "@mui/material";
import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";

const MotionCard = motion(Card);

function renderCards(projects, onClick, theme, tools) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project, index) => (
        <MouseFollowCard
          key={index}
          project={project}
          onClick={() => onClick(project)}
          theme={theme}
          tools={tools}
        />
      ))}
    </Grid>
  );
}

function MouseFollowCard({ project, onClick, theme, tools }) {
  const [mousePos, setMousePos] = React.useState({ x: -100, y: -100 });
  const { t } = useTranslation();
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -100, y: -100 });
  };

  const gradient = `radial-gradient(circle 10em at ${mousePos.x}px ${mousePos.y}px, 
    rgba(159, 54, 71, 0.15) 0%, 
    rgba(219, 70, 72, 0.1) 40%, 
    rgba(251, 149, 83, 0.05) 70%, 
    transparent 90%)`;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <MotionCard
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
        sx={{
          background: gradient,
          boxShadow: 3,
          borderRadius: "20px",
          cursor: "pointer",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1.5rem",
          position: "relative",
          transition: "background 0.15s ease",
          maxWidth: "30em",
          width: "100%",
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: theme.palette.primary.main,
            }}
          >
            {t(`projects.${project.key}.title`)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: 2, textAlign: "justify" }}
          >
            {t(`projects.${project.key}.shortdescription`)}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
            }}
          >
            {t("technologies")}
            {Array.isArray(project.technologies)
              ? project.technologies.map((tech) => {
                  const tool = tools.find((t) => t.name === tech);
                  return (
                    <span
                      key={tech}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      {tool?.icon || null}
                      {tech}
                    </span>
                  );
                })
              : "No definido"}
          </Typography>
        </CardContent>
      </MotionCard>
    </Grid>
  );
}

export default renderCards;
