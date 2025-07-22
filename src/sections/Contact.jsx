import { useState, useRef, use } from "react";
import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";

import emailjs from "@emailjs/browser";

import { useTranslation } from "react-i18next";

import { Filter } from "bad-words";

import { fireConfetti } from "../components/UI/Confetti";

import CustomDialog from "../components/UI/CustomDialog";

import profanity from "../consts/Profanity";

const inputStyle = {
  padding: "0.9rem 1rem",
  borderRadius: 12,
  border: "2px solid",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease",
  fontStyle: "italic",
};

function Contact() {
  const { t } = useTranslation();
  const theme = useTheme();
  const successSound = useRef(null);
  const errorSound = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMessage, setDialogMessage] = useState("");
  const [status, setStatus] = useState("");

  const openDialog = (title, message) => {
    setDialogTitle(title);
    setDialogMessage(message);
    setDialogOpen(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filter = new Filter({ emptyList: true });
    filter.addWords(...profanity);
    if (filter.isProfane(formData.name) || filter.isProfane(formData.message)) {
      errorSound.current?.play();
      openDialog("Error", t('bad_words_detected'));
      return;
    }

    emailjs
      .send(
        "service_zxs5gb6",
        "template_w7b6y0u", 
        formData,
        "ewPvzddLcezBDWv5C" 
      )
      .then(
        () => {
          setSubmitted(true);
          fireConfetti(); 
          setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
          }, 3000);
          successSound.current?.play();
          openDialog(
            t('thanks_title'),
           t('thanks_text')
          );
        },
        () => {
          setStatus("Error al enviar el mensaje. Intenta de nuevo.");
        }
      );
  };
  return (
    <section className="contact">
      <motion.h1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: "center",
          fontSize: "2em",
          color: theme.palette.text.primary,
        }}
      >
        {t("contact_title")}
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="contact-form"
        style={{
          padding: "2em",
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          borderRadius: "15px",
          background: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          maxWidth: "600px",
        }}
      >
        <h2>{t("contact_subtitle")}</h2>
        {/* Nombre */}
        <div className="input-group">
          <label htmlFor="name"> {t("name_label")}</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder={t("name_placeholder")}
            value={formData.name}
            onChange={handleChange}
            required
            onFocus={(e) => (e.target.style.borderColor = theme.inputFocus)}
            onBlur={(e) => (e.target.style.borderColor = theme.inputBorder)}
            className="styled-input"
            style={{
              ...inputStyle,
              borderColor: theme.inputBorder,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          />
        </div>

        {/* Email */}
        <div className="input-group">
          <label htmlFor="email"> {t("email_label")}</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder={t("email_placeholder")}
            value={formData.email}
            onChange={handleChange}
            required
            onFocus={(e) => (e.target.style.borderColor = theme.inputFocus)}
            onBlur={(e) => (e.target.style.borderColor = theme.inputBorder)}
            className="styled-input"
            style={{
              ...inputStyle,
              borderColor: theme.inputBorder,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          />
        </div>

        {/* Mensaje */}
        <div className="input-group">
          <label htmlFor="message"> {t("message_label")}</label>
          <textarea
            id="message"
            name="message"
            placeholder={t("message_placeholder")}
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            onFocus={(e) => (e.target.style.borderColor = theme.inputFocus)}
            onBlur={(e) => (e.target.style.borderColor = theme.inputBorder)}
            className="styled-textarea"
            style={{
              ...inputStyle,
              resize: "none",
              borderColor: theme.inputBorder,
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
            }}
          />
        </div>
        <audio
          ref={successSound}
          src="/assets/sounds/notification.mp3"
          preload="auto"
        />
         <audio
          ref={errorSound}
          src="/assets/sounds/error.mp3"
          preload="auto"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitted}
          className="submit-button"
          style={{
            textAlign: 'center',
            padding: "1rem",
            border: "none",
            borderRadius: "30px",
            cursor: submitted ? "default" : "pointer",
            fontWeight: "700",
            fontSize: "1.1rem",
            background: "linear-gradient(to right, #db4648, #fb9553)",
            color: theme.palette.getContrastText,
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "background 0.3s ease",
          }}
        >
         {submitted ? t("success_message") : t("submit_button")}
        </motion.button>
      </motion.form>
      <CustomDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        title={dialogTitle}
        message={dialogMessage}
      />
    </section>
  );
}

export default Contact;
