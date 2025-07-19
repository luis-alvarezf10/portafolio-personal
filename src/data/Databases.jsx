import {
  SiMysql,
  SiJson,
  SiSqlite,
  SiFirebase,
  SiMongodb,
  SiAmazonwebservices
} from 'react-icons/si';

const databases = [
  { name: 'MySQL', icon: <SiMysql size={40} className="skill-icon" /> },
  { name: 'JSON', icon: <SiJson size={40} className="skill-icon" /> },
  { name: 'SQLite', icon: <SiSqlite size={40} className="skill-icon" /> },
  { name: 'Firebase', icon: <SiFirebase size={40} className="skill-icon" /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} className="skill-icon" /> },
  { name: 'AWS', icon: <SiAmazonwebservices size={40} className="skill-icon" /> },
];

export default databases;