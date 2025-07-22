import { useState, useEffect } from "react";
import { Fab, Zoom, useTheme } from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";

import colors from "../../consts/Colors";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  const handleScroll = () => {
    setVisible(window.scrollY > 300); // muestra el botón después de 300px de scroll
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        color="secondary"
        size="medium"
        onClick={scrollToTop}
        sx={{
          position: "fixed",
          bottom: 30,
          right: 30,
          zIndex: 10,
          boxShadow: theme.shadows[4],
          backgroundColor: colors.red,
          "&:hover": {
            backgroundColor: colors.dark_pink,
          },
        }}
        aria-label="scroll back to top"
      >
        <KeyboardArrowUp />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;
