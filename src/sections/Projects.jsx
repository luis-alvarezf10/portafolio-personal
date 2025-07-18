import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { useTheme } from '@mui/material/styles';


import { SiHtml5,
  SiCss3,
  SiJavascript, 
  SiSharp,
  SiDotnet, 
  SiMysql,
  SiSqlite,
  SiPython,
  SiJson,
  SiGit,
  SiGithub,
  SiPandas,
 } from 'react-icons/si';

 import { motion } from 'framer-motion';

const MotionCard = motion(Card);

const tools = [
  {name: "HTML", icon: <SiHtml5/>},
  {name: "CSS3", icon: <SiCss3/>},
  {name: "JavaScript", icon: <SiJavascript/>},
  {name: "C#", icon: <SiSharp/>},
  {name: ".NET Winform", icon: <SiDotnet/>},
  {name: "MySQL", icon: <SiMysql/>},
  {name: "SQLite", icon: <SiSqlite/>},
  {name: "Python", icon: <SiPython/>},
  {name: "JSON", icon: <SiJson/>},
  {name: "Git", icon: <SiGit/>},
  {name: "GitHub", icon: <SiGithub/>},
  {name: "Pandas", icon: <SiPandas/>}
]

const projects = [
  {
    id: 1,
    title: " Doctor Home — Atención Médica a Domicilio",
    shortdescription: "Proyecto personal desarrollado para una empresa local enfocada en atención médica a domicilio. Esta web estaba orientada al registro de usuarios y presentación de servicios médicos personalizados.",
    description: " Fue uno de mis primeros acercamientos al desarrollo web, en el que logré implementar una interfaz de inicio de sesión funcional y una página principal informativa. A pesar de no haber finalizado el proyecto por limitaciones de tiempo y recursos durante mis estudios, representó una experiencia clave que despertó mi interés en el diseño de sistemas centrados en usuarios.",
    images: [
      "assets/img/projects/dh-page/cap1.png",
      "assets/img/projects/dh-page/cap2.png"
    ],
    technologies: ["HTML", "CSS3", "JavaScript"]
  },
  {
    id: 2,
    title: "Calculadora Multivista — Proyecto Universitario en .NET",
    shortdescription: "Esta calculadora incluye las vistas estándar, científica y de programador, con funciones que permiten realizar cálculos básicos, operaciones avanzadas y conversiones útiles para programación.",
    description: "Proyecto académico desarrollado como uno de mis primeros acercamientos a la tecnología .NET y al lenguaje C#. \n Fue una experiencia enriquecedora que me permitió familiarizarme con el entorno de desarrollo de Visual Studio, comprender la lógica de eventos en interfaces de escritorio y afianzar conceptos de programación orientada a objetos.",
    images: [
      "assets/img/projects/calculator/cap1.png",
      "assets/img/projects/calculator/cap2.png", 
      "assets/img/projects/calculator/cap2.png"
    ],
    technologies: ["C#", ".NET Winform"]
  },
  {
    id: 3,
    title: "Landing Page — Agencia de Tecnología (Proyecto Creativo)",
    shortdescription: "Desarrollo de una landing page para una empresa ficticia dedicada a ofrecer servicios de desarrollo web, cursos, tienda de tecnología, reparación y mantenimiento de dispositivos.",
    description: "El sitio destaca por su diseño atractivo y fluido, con animaciones visuales agradables, distribución clara de información y una estructura pensada para futuras expansiones, incluyendo la redirección a secciones tipo e-commerce. \n Este proyecto reforzó mis conocimientos sobre diseño responsive, animaciones en frontend y la importancia del uso de frameworks modernos para la escalabilidad del sitio. Además, me permitió entender cómo React puede facilitar la navegación entre páginas sin recarga.",
    images: [
      "assets/img/projects/luigi-page/cap1.png",
      "assets/img/projects/luigi-page/cap2.png",
      "assets/img/projects/luigi-page/cap3.png",
      "assets/img/projects/luigi-page/cap4.png",
      "assets/img/projects/luigi-page/cap5.png"
    ],
    technologies: ["HTML", "CSS3"]
  },
  {
    id: 4,
    title: " Sistema de Inventario — Doggy's Store",
    shortdescription: "Desarrollo de un sistema de inventario para una tienda minorista llamada Doggy's Store, con control de acceso por roles (administrador y cajero) y funcionalidades clave para la gestión de productos, ventas y actualización dinámica de precios.", 
    description: "Plataforma para publicar artículos y compartir ideasEl sistema fue construido con C# en Windows Forms, integrando una base de datos MySQL para el manejo estructurado de información. Una de las funcionalidades más destacadas es la obtención automática del valor del dólar desde el Banco Central de Venezuela mediante técnicas de web scraping, lo que permite ajustar los precios de los productos en tiempo real. \n Este proyecto fue fundamental para fortalecer mis conocimientos en diseño de sistemas de ventas, manejo de DataGridViews, conexión a bases de datos y generación de reportes para la administración del negocio.",
    images: [
      "assets/img/projects/doggys-system/cap1.png",
      "assets/img/projects/doggys-system/cap2.png",
      "assets/img/projects/doggys-system/cap3.png",
      "assets/img/projects/doggys-system/cap4.png",
      "assets/img/projects/doggys-system/cap5.png",
      "assets/img/projects/doggys-system/cap6.png",
    ],
    technologies: ["C#", ".NET Winform", "MySQL"]
  },
  {
    id: 5,
    title: " App de Gestión de Mantenimiento — Proyecto Universitario (Ingeniería de Software)",
    shortdescription: "Aplicación móvil multiplataforma desarrollada como proyecto grupal para la asignatura de Ingeniería de Software. El objetivo fue crear una solución funcional para la gestión de órdenes de mantenimiento en una empresa ficticia, permitiendo el registro de usuarios, piezas, equipos y solicitudes de servicio.",
    description: "Aunque inicialmente se consideró Flutter, decidimos explorar nuevas tecnologías y desarrollamos la app utilizando Python con el framework Flet, lo que nos permitió construir interfaces modernas y eficientes. \n La aplicación incorpora control de acceso por niveles, diferenciando entre usuarios administradores y supervisores, mostrando interfaces adaptadas según el rol gracias a una lógica reutilizable que optimizó el código y la experiencia del usuario. \n Para el almacenamiento local se utilizó SQLite3, y en ciertas secciones se manejaron datos en JSON. El trabajo colaborativo se llevó a cabo mediante GitHub y Git Bash, lo que nos permitió trabajar de forma remota y organizada como equipo.",
    images: [
        "assets/img/projects/software-app/cap1.png",
        "assets/img/projects/software-app/cap2.png",
        "assets/img/projects/software-app/cap3.png",
        "assets/img/projects/software-app/cap4.png",
        "assets/img/projects/software-app/cap5.png",
        "assets/img/projects/software-app/cap6.png",
        "assets/img/projects/software-app/cap7.png",
        "assets/img/projects/software-app/cap8.png",
        "assets/img/projects/software-app/cap9.png",
        "assets/img/projects/software-app/cap10.png",
        "assets/img/projects/software-app/cap11.png",
    ],
    technologies: ["Python", "SQLite", "JSON", "Git", "GitHub"]
  }, 
  {
    id: 6,
    title: "Suite Legal Personalizada — Solución a Medida para Abogados",
    shortdescription: "Desarrollo de una aplicación de escritorio personalizada para cubrir las necesidades laborales de mis padres, quienes se desempeñan con creacion de contratos. El sistema fue creado para optimizar su flujo de trabajo y resolver problemáticas concretas, como la gestión de documentos, comunicación interna y seguimiento de requerimientos.",
    description: "Entre sus funcionalidades destacan: Unificador y compresor de archivos PDF, Generador automático de contratos laborales, Consulta en tiempo real del valor del dólar oficial en Venezuela, Buscador de archivos generados desde la interfaz, Chat local entre computadoras conectadas por cable LAN, con opción para compartir archivos, Módulo de reportes, que permite a los usuarios enviar sugerencias o errores directamente a mi correo desde un campo de texto, mediante la creación de un archivo .txt. \n La solución fue desarrollada en tiempo récord, cumpliendo con todos los requerimientos planteados y permitiéndome aplicar múltiples habilidades de programación, redes, procesamiento de datos y automatización de documentos legales.", 
    images: [
      "assets/img/projects/plaf-system/cap1.png",
      "assets/img/projects/plaf-system/cap2.png",
      "assets/img/projects/plaf-system/cap3.png",
      "assets/img/projects/plaf-system/cap4.png",
      "assets/img/projects/plaf-system/cap5.png",
      "assets/img/projects/plaf-system/cap6.png",
      "assets/img/projects/plaf-system/cap7.png",
      "assets/img/projects/plaf-system/cap8.png",
      "assets/img/projects/plaf-system/cap9.png",
      "assets/img/projects/plaf-system/cap10.png",
      "assets/img/projects/plaf-system/cap11.png",      
    ],
    technologies: ["Python", "JSON", "Pandas"]
  }
];

function MouseFollowCard({ project, onClick }) {
  const theme = useTheme();
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
    <Grid item xs={12} sm={6} md={4}>
   <MotionCard
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
  onMouseMove={handleMouseMove}
  onMouseLeave={handleMouseLeave}
  onClick={onClick}
  sx={{
    background: gradient,
    boxShadow: 3,
    borderRadius: '20px',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '1.5rem',
    position: 'relative',
    transition: 'background 0.15s ease',
    maxWidth: '30em',
    width: '100%'
  }}
>
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        fontWeight: 'bold',
        color: theme.palette.primary.main
      }}
    >
      {project.title}
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
      {project.shortdescription}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        display: 'flex',
        gap: '0.5rem',
        flexWrap: 'wrap'
      }}
    >
      Tecnologías:
      {Array.isArray(project.technologies)
        ? project.technologies.map((tech) => {
            const tool = tools.find((t) => t.name === tech);
            return (
              <span
                key={tech}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem'
                }}
              >
                {tool?.icon || null}
                {tech}
              </span>
            );
          })
        : 'No definido'}
    </Typography>
  </CardContent>
</MotionCard>
    </Grid>
  );
}

export default function Projects() {
  const theme = useTheme();
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
        position: 'absolute',
        top: '50%',
        right: 10,
        zIndex: 2,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
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
        position: 'absolute',
        top: '50%',
        left: 10,
        zIndex: 2,
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
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
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1rem' }}>
      <motion.h2
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}  
      >Mis proyectos</motion.h2>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <MouseFollowCard 
            key={project.id} 
            project={project} 
            onClick={() => handleOpen(project)} 
          />
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ position: 'relative', pr: 5 }}>
          {selectedProject?.title}
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {selectedProject && (
          <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Slider de imágenes */}
            <Box>
              <Slider {...settings}>
                {selectedProject.images.map((img, idx) => (
                  <Box key={idx} sx={{ textAlign: 'center' }}>
                    <img
                      src={img}
                      alt={`${selectedProject.title} imagen ${idx + 1}`}
                      style={{ width: '100%', maxHeight: 400, objectFit: 'contain' }}
                    />
                  </Box>
                ))}
              </Slider>
            </Box>

            {/* Descripción */}
            <Typography variant="body1" color="text.primary">
              {selectedProject.description}
            </Typography>

            {/* Tecnologías */}
            <Box>
              <Typography variant="subtitle1" fontWeight="bold" mb={1}>
                Tecnologías utilizadas:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {selectedProject.technologies.map((tech) => {
                  const tool = tools.find((t) => t.name === tech);
                  return (
                    <Box
                      key={tech}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5,
                        padding: '0.3rem 0.6rem',
                        borderRadius: '8px',
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: 1
                      }}
                    >
                      {tool?.icon}
                      <Typography variant="body2">{tech}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>

            {/* Enlaces */}
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
            )}
          </DialogContent>
        )}
      </Dialog>

          </section>
  );
}
