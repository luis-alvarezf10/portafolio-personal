import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import colors from "../../consts/Colors";

function BackgroundEffects({ isDarkMode }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // ajuste colores y opacidades segun sea el color de tema
  const fontColor = isDarkMode ? colors.orange : "rgba(80, 80, 80, 0.5)";
  const opacityValue = 0.5;

  const options = {
    fpsLimit: 30,
    background: { color: "transparent" },
    particles: {
      number: { value: 50, density: { enable: true, area: 900 } },
      color: { value: fontColor },
      shape: {
        type: "char",
        character: [
          { value: "int", font: "Courier New", weight: "400" },
          { value: "void", font: "Courier New", weight: "400" },
          { value: "console.log()", font: "Courier New", weight: "400" },
          { value: "print()", font: "Courier New", weight: "400" },
          { value: "#include", font: "Courier New", weight: "400" },
          { value: "function", font: "Courier New", weight: "400" },
          { value: "var", font: "Courier New", weight: "400" },
          { value: "let", font: "Courier New", weight: "400" },
          { value: "const", font: "Courier New", weight: "400" },
          { value: "def", font: "Courier New", weight: "400" },
        ],
      },
      opacity: {
        value: opacityValue,
        random: true,
        anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false },
      },
      size: { value: 14, random: { enable: true, minimumValue: 10 } },
      move: {
        enable: true,
        speed: 0.15,
        direction: "none",
        random: true,
        straight: false,
        outModes: "out",
      },
      links: { enable: false },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: false },
        onClick: { enable: false },
        resize: true,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        filter: "blur(1.2px)",
        backgroundColor: "transparent",
        fontFamily: "'Courier New', Courier, monospace",
        userSelect: "none",
      }}
    />
  );
}

export default BackgroundEffects;
