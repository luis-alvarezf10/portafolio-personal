import { useEffect } from "react";

// componentes UI
import PauseOnHover from "../components/UI/Carousel";
import renderCards from "../components/UI/Cards.jsx";
import SkillStars from "../components/UI/Star_list";

import { Link } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import "./About.css";

import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

import studies from "../data/Studies.jsx";
import social_media from "../data/SocialMedia.jsx";
import renderSocialButtons from "../components/UI/SocialMediaButtons.jsx";
// Importación de íconos desde react-icons/si (Simple Icons)
import frameworks from "../data/Frameworks.jsx";
import languages from "../data/Languages.jsx";
import databases from "../data/Databases.jsx";

import { useTranslation } from "react-i18next";
import { downloadCV } from "../utils/DownloadCV.js";

function About() {
  const { t } = useTranslation();
  const theme = useTheme();

  const paragraphs = t("info_me", { returnObjects: true });

  useEffect(() => {
    const root = document.querySelector(".about");
    if (root) {
      root.style.backgroundColor = theme.palette.background.default;
      root.style.color = theme.palette.text.primary;
    }
  }, [theme]);

  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");
    cards.forEach((card) => {
      const delay = Math.random() * 3; // entre 0 y 3s
      const duration = 3 + Math.random() * 3; // entre 3 y 6s
      card.style.animation = `zoomAuto ${duration}s ease-in-out ${delay}s infinite`;
    });
  }, []);

  return (
    <motion.section className="about">
      <motion.div
        className="main-info"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: theme.palette.text.secondary }}>
          {t("about_item")}
        </h2>
        <img
          src="assets/img/Foto-tipo-carnet.webp"
          alt="Foto de perfil"
          loading="lazy"
        />
        <h2 id="fullname">Luis Álvarez Franceschi</h2>
        <Link
          href="https://maps.app.goo.gl/9hEWVLKWCV4q54uFA"
          underline="none"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            position: "relative",
            zIndex: 1,
            fontWeight: "bold",
          }}
        >
          Anzoátegui, Venezuela
        </Link>
        <div>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </div>
      </motion.div>

      <div className="view-social-media">
        <button
          id="download-button"
          onClick={downloadCV}
          style={{
            color: theme.palette.text.primary,
          }}
        >
          {t("download_cv")}
          <DownloadIcon />
        </button>
        <motion.div
          className="list-social-media"
          whileTap={{ scale: 0.9 }}
        >
          {renderSocialButtons(social_media)}
        </motion.div>
      </div>
      <div className="knowledge-container"></div>
      <motion.div className="studies-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <section>
          <h2>{t("studies_title")}</h2>
          <p>{t('studies_description')}</p>
          <motion.div
            className="studies-cards"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {renderCards(studies, theme)}
          </motion.div>
        </section>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: theme.palette.text.primary,
          fontSize: "3rem",
          fontWeight: "bold",
        }}
      >
        {t("knowledge")}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>{t("languages_title")}</h3>
        <p>{t('languages_description')}</p>
      </motion.div>
      <motion.div
        className="container-languages"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SkillStars skills={languages} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>
          {t("frameworks_title")}
        </h3>
        <p>{t('frameworks_description')}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <PauseOnHover items={frameworks} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>{t("database_title")}</h3>
        <p>{t('database_description')}</p>  
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <PauseOnHover items={databases} />
      </motion.div>
    </motion.section>
  );
}

export default About;
