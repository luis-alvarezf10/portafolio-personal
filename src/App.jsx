// importa efecto, memo, y estado de react
import { useState, useMemo, useEffect } from "react";

// redireccion de sections y components
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

// importa el estilo
import "./App.css";

// crea el tema, proveedor de tema, y cssbaseline que sirve que extraiga totalmente estilos de mui sin recogerlo del mismo navegador
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";

// efecto de "codigo volando" en el fondo
import BackgroundEffects from "./components/UI/BackgroundEfects";

// desplega un boton al hacer roll scroll hacia abajo y te devuelvo al top de la pagina
import ScrollToTopButton from "./components/UI/ScrollToTopButton";

import colors from "./consts/Colors";

function App() {
  // para saber la seccion activa selecionada por el header, el cual de forma predeterminada esta en about
  const [activeSection, setActiveSection] = useState("about");

  // extrae el modo oscuro
  const [darkMode, setDarkMode] = useState(false);

  const [dialogOpen, setDialogOpen] = useState(false);
  // esto para subir al header cuando se cambie de pagina


  useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [activeSection]); // Cada vez que cambie la sección


  // crear tema memoizado para no recrearlo en cada render
  const theme = useMemo(
    () =>
      createTheme({
        // paleta de colores segun el tema
        palette: {
          // valida el modo seleccionado
          mode: darkMode ? "dark" : "light",

          // modo oscuro
          ...(darkMode
            ? {
                primary: {
                  main: "#db4648",
                },
                secondary: {
                  main: "#9f3647",
                },
                background: {
                  default: "#111111",
                  paper: "#232323",
                  gradient: "linear-gradient(to bottom, #000000, #111111)",
                },
                text: {
                  primary: "#ffffff",
                  secondary: colors.dark_grey,
                },
              }
            : {
                // Modo claro
                primary: {
                  main: "#db4648",
                },
                secondary: {
                  main: "#9f3647",
                },
                background: {
                  default: "#ffffff",
                  paper: "#ededf2",
                  gradient: "linear-gradient(to bottom, #ededf2, #fcfdff)",
                },
                text: {
                  primary: "#111111",
                  secondary: colors.dark_grey,
                },
              }),
        },
      }),
    [darkMode]
  );

  // función para cambiar modo oscuro/claro
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTopButton />
      <BackgroundEffects />
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <div className="App">
        <main
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: "100vh",
            padding: "2em",
          }}
        >
          {activeSection === "about" && <About />}
          {activeSection === "projects" && <Projects />}
          {activeSection === "contact" && <Contact />}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
