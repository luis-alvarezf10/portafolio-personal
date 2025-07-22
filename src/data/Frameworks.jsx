import {
  SiBootstrap,
  SiMui,
  SiTailwindcss,
  SiDotnet,
  SiReact,
  SiDjango,
  SiPandas,
} from 'react-icons/si';

const frameworks = [
    { name: 'Bootstrap', icon: <SiBootstrap size={40} className="skill-icon" /> },
    { name: '.NET', icon: <SiDotnet size={40}  className="skill-icon" /> },
    { name: 'React', icon: <SiReact size={40} className="skill-icon" /> },
    { name: 'Material UI', icon: <SiMui size={40} className="skill-icon" /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={40} className="skill-icon" /> },
    { name: 'Django', icon: <SiDjango size={40} className="skill-icon" /> },
    { name: 'Pandas', icon: <SiPandas size={40} className="skill-icon" /> },
];

export default frameworks;