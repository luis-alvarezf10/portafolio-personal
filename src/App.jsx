import React, { useState, useMemo, useEffect } from 'react';  // <-- Importar useMemo
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

import BackgroundEffects from './components/BackgroundEfects';

import ScrollToTopButton from './components/ScrollToTopButton';



function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [darkMode, setDarkMode] = useState(false);
  // esto para subir al header cuando se cambie de pagina
  useEffect(() => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 }, [activeSection]);

  // Crear tema memoizado para no recrearlo en cada render
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',

      ...(darkMode ? {
        // Modo oscuro
        primary: {
          main: '#db4648',
        },
        secondary: {
          main: '#9f3647',
        },
        background: {
          default: '#111111',
          paper: '#232323',
          gradient: 'linear-gradient(to bottom, #000000, #111111)',
        },
        text: {
          primary: '#ffffff',
          secondary: '#bdbdbd',
        },
      } : {
        // Modo claro
        primary: {
          main:  '#db4648',
        },
        secondary: {
          main: '#9f3647',
        },
        background: {
          default: '#ffffff',
          paper: '#ededf2',
          gradient: 'linear-gradient(to bottom, #ededf2, #fcfdff)',
        },
        text: {
          primary: '#111111',
          secondary: '#666666',
        },
      }),
    },
    }),
   [darkMode]
  );

  // Función para cambiar modo oscuro/claro
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
        {/* Pasamos darkMode y toggleDarkMode al Header */}
        <main
          style={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            minHeight: '100vh', // asegura que el fondo cubra toda la pantalla
            padding: '2em'
          }}
        >
          {activeSection === 'about' && <About />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'contact' && <Contact />}
        </main>
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
