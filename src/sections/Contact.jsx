import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { useTheme } from '@mui/material/styles';

import emailjs from '@emailjs/browser';

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';


import { fireConfetti } from '../components/UI/Confetti'; 

function Contact({ darkMode = false }) {
  const theme = useTheme();
  const clickSound = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aquí integras EmailJS o backend
    
    emailjs.send(
      'service_zxs5gb6',       // lo obtienes en dashboard EmailJS
      'template_w7b6y0u',      // plantilla creada
      formData,
      'ewPvzddLcezBDWv5C'        // clave pública EmailJS
    ).then(() => {
      setSubmitted(true);
      fireConfetti(); // 🎉 LANZA CONFETI AQUÍ
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
      if (clickSound.current) {
        clickSound.current.currentTime = 0;
        clickSound.current.play();
      }
      setDialogOpen(true);
    }, () => {
      setStatus('Error al enviar el mensaje. Intenta de nuevo.');
    });
  };
return (
  <section className="contact">
    <motion.h1
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}  
      style={{
        textAlign: 'center',
        fontSize: '2em',
        color: theme.palette.text.primary
      }}
    >
      Contacto
    </motion.h1>

    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      className="contact-form"
      style={{
        padding: '2em',
        position: 'relative',
        zIndex: 1,
        margin: '0 auto',
        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        borderRadius: '15px',
        background: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.5rem',
        maxWidth: '600px'
      }}
    >
      {/* Nombre */}
      <div className="input-group">
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="¿Cómo te llamas?"
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
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="tuemail@gmail.com"
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
        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escríbeme lo que necesitas..."
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
          onFocus={(e) => (e.target.style.borderColor = theme.inputFocus)}
          onBlur={(e) => (e.target.style.borderColor = theme.inputBorder)}
          className="styled-textarea"
          style={{
            ...inputStyle,
            resize: 'none',
            borderColor: theme.inputBorder,
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }}
        />
      </div>
      <audio ref={clickSound} src="/assets/sounds/wow.mp3" preload="auto"/>
      <motion.button
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        disabled={submitted}
        className="submit-button"
        style={{
          padding: "1rem",
          border: "none",
          borderRadius: "12px",
          cursor: submitted ? "default" : "pointer",
          fontWeight: "700",
          fontSize: "1.1rem",
          background: 'linear-gradient(to right, #db4648, #fb9553)',
          color: theme.palette.primary.contrastText,
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
          transition: "background 0.3s ease",
        }}
      >
        {submitted ? "Enviado ✅" : "Enviar Mensaje"}
      </motion.button>
    </motion.form>
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
  <DialogTitle>
    ¡Muchas gracias! 🙌
  </DialogTitle>

  <DialogContent>
    <Typography>
      Gracias por tomarte el tiempo de escribirme y por considerarme para tu proyecto o colaboración.
      Te responderé lo antes posible.
    </Typography>
  </DialogContent>

  <DialogActions>
    <Button
      onClick={() => setDialogOpen(false)}
      variant="contained"
      sx={{
        background: 'linear-gradient(to right, #db4648, #fb9553)',
        color: '#fff',
        borderRadius: '10px',
        textTransform: 'none',
        fontWeight: 'bold',
        px: 2,
      }}
    >
      De nada 😄
    </Button>
  </DialogActions>
</Dialog>

  </section>
);
}

const inputStyle = {
  padding: "0.9rem 1rem",
  borderRadius: 12,
  border: "2px solid",
  fontSize: "1rem",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 0.3s ease",
  fontStyle: 'italic' 
};

export default Contact;
