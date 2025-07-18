import React, { useState } from 'react';
import {
  Drawer,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Menu,
  Person,
  Work,
  Email,
  WbSunny, 
  NightsStay
} from '@mui/icons-material';

function Header({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'Sobre Mí', icon: <Person /> },
    { id: 'projects', label: 'Proyectos', icon: <Work /> },
    { id: 'contact', label: 'Contacto', icon: <Email /> }
  ];

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // md ≈ 960px

  const DrawerList = (
    <Box
      sx={{ width: 250,  overflowX: 'hidden',}}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      {menuItems.map(item => (
        <Button
          key={item.id}
          fullWidth
          startIcon={item.icon}
          onClick={() => {
            setActiveSection(item.id);
            setOpen(false);
          }}
          sx={{
            justifyContent: 'flex-start',
            px: 2,
            color: theme.palette.text.primary,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)'
            },
            backgroundColor:
              activeSection === item.id ? theme.palette.background.paper : 'transparent',
            margin: '0.5em',
            padding: '1em 1em',
            fontSize: '1em',
            borderRadius: '8px',
            transition: '0.3s ease'
          }}
        >
          {item.label}
        </Button>
      ))}
    </Box>
  );

  return (
    <header
      className="header"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        background: theme.palette.background.gradient,
        color: theme.palette.text.primary
      }}
    >
      <div className="me">
        <h1>Luis Álvarez</h1>
        <h2>Ingeniería de sistemas</h2>
      </div>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Botón toggle Dark Mode */}
        <IconButton onClick={toggleDarkMode} color="inherit" aria-label="toggle dark mode">
          {darkMode ? <WbSunny /> : <NightsStay />}
        </IconButton>

        {isSmallScreen ? (
          <>
            <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
              <Menu />
            </IconButton>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
              PaperProps={{
                sx: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary
                }
              }}
            >
              {DrawerList}
            </Drawer>
          </>
        ) : (
          <Box display="flex" gap={3}>
            {menuItems.map(item => (
              <Button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                }}
                sx={{
                  color: activeSection === item.id ?  theme.palette.text.primary : theme.palette.text.secondary,
                  backgroundColor: activeSection === item.id ? theme.palette.background.default : 'transparent',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  textTransform: 'none',
                  borderRadius: '8px',
                  transition: '0.3s ease',
                  '&:hover': {
                    backgroundColor:
                      activeSection === item.id ? theme.palette.background.default : 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        )}
      </nav>
    </header>
  );
}

export default Header;
