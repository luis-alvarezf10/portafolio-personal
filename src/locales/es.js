import frameworks from "../data/Frameworks";

export default {
  career: "Ingeniería de Sistemas",
  about_item: "Sobre mí",
  projects_item: "Proyectos",
  contact_item: "Contacto",
  info_me: [
    "Soy estudiante de Ingeniería de Sistemas (8vo semestre) en la prestigiosa Universidad Santa María – Núcleo Oriente, con finalización estimada en febrero de 2027.",
    "Me considero proactivo, adaptable y un excelente tomador de decisiones. Me apasiona la tecnología, el desarrollo de software, la automatización de procesos con inteligencia artificial, redes de computación y gestión de proyectos.",
    "Me enfoco principalmente en el desarrollo de aplicaciones web y móviles, y estoy abierto a colaborar en nuevos desafíos que aporten valor tanto al cliente como a mi crecimiento profesional."
  ],
  download_cv: "Descargar CV",
  knowledge: "Conocimientos",
  studies_title: "Estudios y Certificaciones",
  studies_description: "Formación académica y certificaciones que respaldan mis conocimientos en programación, desarrollo web y herramientas modernas de tecnología.",
  studies: {
    usm: {
      name: 'Universidad Santa María',
      degree: 'Ingeniería de Sistemas'
    },
    uneweb: {
      name: 'Uneweb',
      degree: 'Desarrollo web'
    },
    ctep: {
      name: 'Instituto CTEP',
      degree: 'Inglés conversacional intermedio'
    },
    adakademy: {
      name: 'Adakademy',
      degree: 'Desarrollo web'
    }
  },
  languages_title: "Lenguajes de Programacion",
  languages_description: "Lenguajes con los que tengo experiencia para desarrollar soluciones robustas, eficientes y adaptadas a distintos entornos.",
  frameworks_title: "Frameworks y librerías",
  frameworks_description: "Herramientas y tecnologías modernas que utilizo para optimizar el desarrollo, mejorar interfaces y construir aplicaciones sólidas.",
  database_title: "Bases de datos",
  database_description: "Manejo de diferentes sistemas de bases de datos relacionales y no relacionales, tanto locales como en la nube. Esto me permite estructurar, almacenar y consultar datos de manera eficiente para distintas aplicaciones.",
  projects_title: "Bienvenido a mis Proyectos",
  projects: {
    dh: {
      title: " Doctor Home — Atención Médica a Domicilio",
      shortdescription: "Proyecto personal desarrollado para una empresa local enfocada en atención médica a domicilio. Esta web estaba orientada al registro de usuarios y presentación de servicios médicos personalizados.",
      description: [
        " Fue uno de mis primeros acercamientos al desarrollo web, en el que logré implementar una interfaz de inicio de sesión funcional y una página principal informativa. A pesar de no haber finalizado el proyecto por limitaciones de tiempo y recursos durante mis estudios, representó una experiencia clave que despertó mi interés en el diseño de sistemas centrados en usuarios.",
      ]
    },
    calculator: {
      title: "Calculadora Multivista — Proyecto Universitario",
      shortdescription: "Esta calculadora incluye las vistas estándar, científica y de programador, con funciones que permiten realizar cálculos básicos, operaciones avanzadas y conversiones útiles para programación.",
      description: [
         "Proyecto académico desarrollado como uno de mis primeros acercamientos a la tecnología .NET y al lenguaje C#.",
         "Fue una experiencia enriquecedora que me permitió familiarizarme con el entorno de desarrollo de Visual Studio, comprender la lógica de eventos en interfaces de escritorio y afianzar conceptos de programación orientada a objetos.",
      ]
    },
    landing_page: {
      title: "Landing Page — Agencia de Tecnología (Proyecto Creativo)",
      shortdescription: "Desarrollo de una landing page para una empresa ficticia dedicada a ofrecer servicios de desarrollo web, cursos, tienda de tecnología, reparación y mantenimiento de dispositivos.",
      description:[
        "El sitio destaca por su diseño atractivo y fluido, con animaciones visuales agradables, distribución clara de información y una estructura pensada para futuras expansiones, incluyendo la redirección a secciones tipo e-commerce.", 
        "Este proyecto reforzó mis conocimientos sobre diseño responsive, animaciones en frontend y la importancia del uso de frameworks modernos para la escalabilidad del sitio. Además, me permitió entender cómo React puede facilitar la navegación entre páginas sin recarga."
      ]
    },
    doggys: {
      title: "Sistema de Inventario — Doggy's Store",
      shortdescription: "Desarrollo de un sistema de inventario para una tienda minorista llamada Doggy's Store, con control de acceso por roles (administrador y cajero) y funcionalidades clave para la gestión de productos, ventas y actualización dinámica de precios.",  
      description: [
        "Plataforma para publicar artículos y compartir ideasEl sistema fue construido con C# en Windows Forms, integrando una base de datos MySQL para el manejo estructurado de información. Una de las funcionalidades más destacadas es la obtención automática del valor del dólar desde el Banco Central de Venezuela mediante técnicas de web scraping, lo que permite ajustar los precios de los productos en tiempo real.",
        "Este proyecto fue fundamental para fortalecer mis conocimientos en diseño de sistemas de ventas, manejo de DataGridViews, conexión a bases de datos y generación de reportes para la administración del negocio."
      ]
    },
    software: {
      title: " App de Gestión de Mantenimiento — Proyecto Universitario (Ingeniería de Software)",
      shortdescription: "Aplicación móvil multiplataforma desarrollada como proyecto grupal para la asignatura de Ingeniería de Software. El objetivo fue crear una solución funcional para la gestión de órdenes de mantenimiento en una empresa ficticia, permitiendo el registro de usuarios, piezas, equipos y solicitudes de servicio.",
      description: [
        "Aunque inicialmente se consideró Flutter, decidimos explorar nuevas tecnologías y desarrollamos la app utilizando Python con el framework Flet, lo que nos permitió construir interfaces modernas y eficientes.",
        "La aplicación incorpora control de acceso por niveles, diferenciando entre usuarios administradores y supervisores, mostrando interfaces adaptadas según el rol gracias a una lógica reutilizable que optimizó el código y la experiencia del usuario.",
        "Para el almacenamiento local se utilizó SQLite3, y en ciertas secciones se manejaron datos en JSON. El trabajo colaborativo se llevó a cabo mediante GitHub y Git Bash, lo que nos permitió trabajar de forma remota y organizada como equipo."
      ]
    },
    plaf: {
      title: "Suite Legal Personalizada — Solución a Medida para Abogados",
      shortdescription: "Desarrollo de una aplicación de escritorio personalizada para cubrir las necesidades laborales de mis padres, quienes se desempeñan con creacion de contratos. El sistema fue creado para optimizar su flujo de trabajo y resolver problemáticas concretas, como la gestión de documentos, comunicación interna y seguimiento de requerimientos.",
      description: [
        "Entre sus funcionalidades destacan: Unificador y compresor de archivos PDF, Generador automático de contratos laborales, Consulta en tiempo real del valor del dólar oficial en Venezuela, Buscador de archivos generados desde la interfaz, Chat local entre computadoras conectadas por cable LAN, con opción para compartir archivos, Módulo de reportes, que permite a los usuarios enviar sugerencias o errores directamente a mi correo desde un campo de texto, mediante la creación de un archivo .txt.",
        "La solución fue desarrollada en tiempo récord, cumpliendo con todos los requerimientos planteados y permitiéndome aplicar múltiples habilidades de programación, redes, procesamiento de datos y automatización de documentos legales."
      ]
    }
  },
  technologies: "Tecnologías:",
  contact_title: "Contactame",
  contact_subtitle: "Trabajemos juntos!",
  name_label: "Nombre",
  email_label: "Email",
  message_label: "Mensaje",
  submit_button: "Enviar",
  success_message: "¡Mensaje enviado con éxito! ✅",
  error_message: "¡Error al enviar el mensaje! Por favor, inténtalo de nuevo.",
  name_placeholder: "¿Como te llamas?",
  email_placeholder: "tuemail@gmail.com",
  message_placeholder: "Escribe tu mensaje aquí con tus requerimientos...",
  bad_words_detected: "⚠️ Por favor, evita el uso de lenguaje ofensivo. Este espacio está diseñado para una comunicación respetuosa y profesional.",
  thanks_title: "Muchas gracias 🙌",
  thanks_text: "Muchas gracias por escribirme y tenerme en cuenta para tu proximo proyecto y colaboracion. En breves me contactaré contigo. 👍",
  reserveds: "Todos los derechos reservados",
  version: "Ultima versión"
};
