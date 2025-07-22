import React from "react";
import { Card, CardContent, Typography, Grid, CardMedia } from "@mui/material";
import { useTranslation } from "react-i18next";

function renderCards(studies, theme) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {studies.map((study, index) => (
        <MouseFollowCard key={index} study={study} theme={theme} />
      ))}
    </Grid>
  );
}

function MouseFollowCard({ study, theme }) {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = React.useState({ x: -100, y: -100 });

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
    <Grid xs={12} sm={6} md={4}>
      <Card
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          bgcolor: theme.palette.background.paper,
          boxShadow: 3,
          width: "20em",
          height: "14em",
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
          background: gradient,
          transition: "background 0.15s ease",
        }}
      >
        <CardContent
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            pointerEvents: "none",
            color: theme.palette.text.primary,
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontWeight: "bold", fontSize: "1.1em", textAlign: "center" }}
          >
            {t(`studies.${study.key}.name`)}
          </Typography>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              height: 100,
              margin: "0 auto",
              display: "block",
              objectFit: "contain",
            }}
            image={study.image}
            alt={t(`studies.${study.key}.name`)}
          />
          <Typography
            variant="body1"
            color="text.secondary"
            textAlign={"center"}
          >
            {t(`studies.${study.key}.degree`)}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
// Al final de tu archivo cards.js
export default renderCards;
