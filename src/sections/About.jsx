import PauseOnHover from './Carousel';
import renderCards from './cards';
import SkillStars from './star_list';
import './About.css';
import { useEffect } from 'react';

import { Link } from '@mui/material';

import Button from '@mui/material/Button';

import { FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { useTheme } from '@mui/material/styles';


// Importación de íconos desde react-icons/si (Simple Icons)
import {
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiFlutter,
  SiBootstrap,
  SiDotnet,
  SiReact,
  SiMui,
  SiDjango,
  SiPandas,
  // social media
  SiGithub,
  SiInstagram,
  SiYoutube,
  SiX,
} from 'react-icons/si';



function About() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark'
  
  useEffect(() => {
    const root = document.querySelector('.about');
    if (root) {
      root.style.backgroundColor = theme.palette.background.default;
      root.style.color = theme.palette.text.primary;
    }
  }, [theme]);
  
  const languages = [
    { name: 'C++', icon: <SiCplusplus size={40} color="#00599C" className="skill-icon" />, level: 3 },
    { name: 'C#', icon: <SiSharp size={40} color= "#5C2D91" className="skill-icon" />, level: 4 },
    { name: 'HTML5', icon: <SiHtml5 size={40} color="#e34c26" className="skill-icon" />, level: 5 },
    { name: 'CSS3', icon: <SiCss3 size={40} color="#264de4" className="skill-icon" />, level: 5 },
    { name: 'JavaScript', icon: <SiJavascript size={40} color="#f7df1e" className="skill-icon" />, level: 3},
    { name: 'Python', icon: <SiPython size={40} color="#3776AB" className="skill-icon" />, level: 5 },
    { name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" className="skill-icon" />, level: 1 },
  ];


  const frameworks = [
    { name: 'Bootstrap', icon: <SiBootstrap size={40} className="skill-icon" /> },
    { name: '.NET', icon: <SiDotnet size={40}  className="skill-icon" /> },
    { name: 'React', icon: <SiReact size={40} className="skill-icon" /> },
    { name: 'Material UI', icon: <SiMui size={40} className="skill-icon" /> },
    { name: 'Django', icon: <SiDjango size={40} className="skill-icon" /> },
    { name: 'Pandas', icon: <SiPandas size={40} className="skill-icon" /> },
  ];

  const social_media = [
    { name: 'Github', icon: <SiGithub size={30} className="social-media" /> },
    { name: 'Instagram', icon: <SiInstagram size={30} className="social-media" /> },
    { name: 'Youtube', icon: <SiYoutube size={30} className="social-media" /> },
    { name: 'X', icon: <SiX size={30} className="social-media" /> }
  ]

  const studies = [
    { name: 'Universidad Santa María', image: '/assets/img/companys/usm-logo.png', degree: 'Ingeniería de Sistemas'},
    { name: 'Uneweb', image: 'assets/img/companys/uneweb-logo.png', degree: 'Desarrollo web'},
    { name: 'CTEP', image: '/assets/img/companys/ctep-logo.png', degree: 'Ingles conversacional intermedio' },
    { name: 'Adakademy', image: '/assets/img/companys/adakademy_logo_azul.png', degree: 'Desarrollo web' },
  ]

  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    cards.forEach(card => {
      const delay = Math.random() * 3; // entre 0 y 3s
      const duration = 3 + Math.random() * 3; // entre 3 y 6s
      card.style.animation = `zoomAuto ${duration}s ease-in-out ${delay}s infinite`;
    });
  }, []);

  return (
    <motion.section className="about">
      <motion.div className='main-info'
          initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}  
      >
        <h2 id='subtittle'>Sobre Mí</h2>
        <img src="/assets/img/foto-tipo-carnet.png" alt="Foto de perfil" />
        <h2 id='fullname'>Luis Álvarez Franceschi</h2>
        <Link href="https://maps.app.goo.gl/9hEWVLKWCV4q54uFA" underline="none" target="_blank" rel="noopener noreferrer"
        sx={{
          position: 'relative',
          zIndex: 1,
          fontWeight: 'bold'
        }}
        >
          Anzoátegui, Venezuela
        </Link>
        <p>Soy estudiante de Ingeniería de Sistemas (8vo semestre) en la prestigiosa Universidad Santa María – Núcleo Oriente, con finalización estimada en febrero de 2027.</p>

        <p>Me considero proactivo, adaptable y un excelente tomador de decisiones. Me apasiona la tecnología, el desarrollo de software, la automatización de procesos con inteligencia artificial, redes de computadoción y gestión de proyectos.</p>

        <p>Me enfoco principalmente en el desarrollo de aplicaciones web y móviles, y estoy abierto a colaborar en nuevos desafíos que aporten valor tanto al cliente como a mi crecimiento profesional. </p>
      </motion.div>

      <div className='view-social-media'>
        <button id='download-button'
          style={{
            color: theme.palette.text.primary,
          }}
        >
          Descargar CV
          <FaDownload />
        </button>
        <div className='list-social-media'
          whileHover={{ scale: 1.2, rotate: 5 }}
  whileTap={{ scale: 0.9 }}>
          {social_media.map((item, index) => (
            <Button key={index} 
              variant="contained" 
              color="white" 
              className= "social-media-button"
               sx={{
                borderRadius: '50%',
                margin: '0.5em',
                width: '0.2em',
                height: '4.5em',
                padding: 0,
                color: 'white',
                background: '#1d1d1d',
                border: '0.2em solid white',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  background: 'black',
                  color: 'white',
                }
              }}
            >
              <span>
                {item.icon}
              </span>
            </Button>
          ))}
        </div>
      </div>

      <div className="studies-container">
        <section>
          <h2>Estudios y certificaciones</h2>
          <motion.div className='studies-cards'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >            
            {renderCards(studies, theme)}  
          </motion.div>
        </section>
      </div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >Habilidades técnicas</motion.h3>
      <motion.div className='container-languages'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <SkillStars skills={languages} />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Frameworks y Librerías
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <PauseOnHover items={frameworks}/>
      </motion.div>
    </motion.section>
  );
}

export default About;
