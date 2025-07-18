import React from 'react';

function Footer() {
  return (
    <footer style={{
      background: '#1d1d1d',
      color: 'white',
      padding: '1em',
      textAlign: 'center',
      marginTop: '2em',
      alignItems: 'end',
    }}>
      <p>© {new Date().getFullYear()} Luigi System's. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
