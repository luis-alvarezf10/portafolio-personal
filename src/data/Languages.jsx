import {
  SiCplusplus,
  SiSharp,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiFlutter,
} from 'react-icons/si';

const languages = [
{ name: 'C++', icon: <SiCplusplus size={40} color="#00599C" className="skill-icon" />, level: 3 },
{ name: 'C#', icon: <SiSharp size={40} color= "#5C2D91" className="skill-icon" />, level: 4 },
{ name: 'HTML5', icon: <SiHtml5 size={40} color="#e34c26" className="skill-icon" />, level: 5 },
{ name: 'CSS3', icon: <SiCss3 size={40} color="#264de4" className="skill-icon" />, level: 5 },
{ name: 'JavaScript', icon: <SiJavascript size={40} color="#f7df1e" className="skill-icon" />, level: 3},
{ name: 'Python', icon: <SiPython size={40} color="#3776AB" className="skill-icon" />, level: 5 },
{ name: 'Flutter', icon: <SiFlutter size={40} color="#02569B" className="skill-icon" />, level: 1 },
];

export default languages;