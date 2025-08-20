import {
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiDotnet,
  SiPandas,
  SiDjango,
  SiNodedotjs,
  SiNestjs
} from 'react-icons/si';

const frameworks = [
    { name: 'Bootstrap', icon: <SiBootstrap size={50} className="skill-icon" /> },
    { name: 'React', icon: <SiReact size={50} className="skill-icon" /> },
    { name: 'Material UI', icon: <SiMui size={50} className="skill-icon" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={50} className="skill-icon" /> },
    { name: 'Framer Motion', icon: <SiFramer size={50} className="skill-icon" /> },
    { name: '.NET', icon: <SiDotnet size={50}  className="skill-icon" /> },
    { name: 'Django', icon: <SiDjango size={50} className="skill-icon" /> },
    { name: 'Pandas', icon: <SiPandas size={50} className="skill-icon" /> },
    { name: 'Node.js', icon: <SiNodedotjs size={50} className="skill-icon" /> },
    { name: 'Nest.js', icon: <SiNestjs size={50} className="skill-icon" /> }
];

export default frameworks;