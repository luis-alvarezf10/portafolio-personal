import { useTranslation } from "react-i18next";
import version from "../consts/Version";
import colors from "../consts/Colors";

function Footer() {
  const { t } = useTranslation();
  return (
    <footer
      style={{
        background: "#1d1d1d",
        color: "white",
        padding: "1em",
        textAlign: "center",
        marginTop: "2em",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1em",
          alignItems: "center",
          marginBottom: "0.5em",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/luis-alvarezf10/portafolio-personal/main/public/assets/img/LA.png"
          alt="Mi Logo"
          style={{
            height: "4em",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.2))",
          }}
        />
        <img
          src="https://raw.githubusercontent.com/luis-alvarezf10/portafolio-personal/main/public/assets/img/nex-technology-white.png"
          alt="Logo del Negocio"
          style={{
            height: "8em",
            filter: "drop-shadow(0 0 2px rgba(255,255,255,0.2))",
          }}
        />
      </div>
      <p style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} Luis Álvarez | {t("reserveds")}
      </p>
      <div style={{ color: colors.dark_grey }}>
        <span>{t("version")}:</span>
        <span>{version}</span>
      </div>
    </footer>
  );
}

export default Footer;
