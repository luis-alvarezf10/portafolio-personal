/src
│
├── /assets              # Imágenes, íconos, fondos, logos, etc.
│   ├── images/
│   └── icons/
│
├── /components          # Componentes reutilizables
│   ├── Header.jsx
│   ├── SectionWrapper.jsx     # Opcional, para diseño común entre secciones
│   └── UI/                   # Botones, sliders, tarjetas, etc.
│       ├── MouseFollowCard.jsx
│       └── CustomButton.jsx
│
├── /sections            # Secciones principales de tu portafolio
│   ├── About.jsx
│   ├── Projects.jsx
│   └── Contact.jsx
│
├── /hooks               # Hooks personalizados (por ejemplo, uso de scroll activo)
│   └── useActiveSection.jsx
│
├── /data                # Arreglos, objetos o JSONs con datos (tecnologías, proyectos...)
│   ├── projects.js
│   └── technologies.js
│
├── /styles              # Archivos CSS o Tailwind configs (si no usas módulos)
│   └── global.css
│
├── /layouts             # Layouts generales si los necesitas (para navegación, etc.)
│   └── MainLayout.jsx
│
├── App.jsx              # Componente principal (estructura de la página)
└── main.jsx             # Punto de entrada (ReactDOM.createRoot)
