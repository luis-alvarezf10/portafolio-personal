import React, { useState } from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from "@mui/material/styles";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import projects from "../data/projects";

import renderCards from "../components/UI/ProjectCards";

import tools from "../data/tools";

export default function Projects() {
  const theme = useTheme();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <IconButton
        onClick={onClick}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          zIndex: 2,
          transform: "translateY(-50%)",
          backgroundColor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1rem" }}>
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects_title")}
      </motion.h2>

      {renderCards(projects, handleOpen, theme, tools)}
      {/*aqui quiero poner una funcion que retorne el dialog, pero bueno*/}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ position: "relative", pr: 5 }}>
          {t(`projects.${selectedProject?.key}.title`)}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {selectedProject && (
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
          >
            {/* Slider de imágenes */}
            <Box>
              <Slider {...settings}>
                {selectedProject.images.map((img, idx) => (
                  <Box key={idx} sx={{ textAlign: "center" }}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} imagen ${idx + 1}`}
                      style={{
                        width: "100%",
                        maxHeight: 400,
                        objectFit: "contain",
                      }}
                      loading="lazy"
                    />
                  </Box>
                ))}
              </Slider>
            </Box>

            {/* Título */}
            <Typography
              variant="body1"
              component="div"
              color="text.primary"
              textAlign="justify"
            >
              {t(`projects.${selectedProject?.key}.shortdescription`)}
            </Typography>
            {/* Descripción */}
            {t(`projects.${selectedProject?.key}.description`, {
              returnObjects: true,
            }).map((line, idx) => (
              <Typography
                key={idx}
                variant="body1"
                color="text.primary"
                textAlign="justify"
              >
                {line}
              </Typography>
            ))}
            {/* Tecnologías */}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                {t("technologies")}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {selectedProject.technologies.map((tech) => {
                  const tool = tools.find((t) => t.name === tech);
                  return (
                    <Box
                      key={tech}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 0.5,
                        padding: "0.3rem 0.6rem",
                        borderRadius: "8px",
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: 1,
                      }}
                    >
                      {tool?.icon}
                      <Typography variant="body2">{tech}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* esto para agregar links en un futuro
              {selectedProject.links && (
                <Box sx={{ mt: 2 }}>
                  {selectedProject.links.demo && (
                    <Button
                      href={selectedProject.links.demo}
                      target="_blank"
                      rel="noopener"
                      variant="contained"
                      sx={{ mr: 2 }}
                    >
                      Ver demo
                    </Button>
                  )}
                  {selectedProject.links.github && (
                    <Button
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener"
                      variant="outlined"
                    >
                      Ver código
                    </Button>
                  )}
                </Box>
              )}*/}
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
