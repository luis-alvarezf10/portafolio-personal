import { useTranslation } from "react-i18next";
import DownloadIcon from "@mui/icons-material/Download";

function DownloadCVButton({ theme }) {
  const { t, i18n } = useTranslation();

  const handleDownload = () => {
    // Detectar idioma
    const currentLang = i18n.language;
    const fileName =
      currentLang === "en"
        ? "cv-luis-alvarez-en.pdf"
        : "cv-luis-alvarez-es.pdf";

    const link = document.createElement("a");
    link.href = `/assets/documents/${fileName}`;
    link.download =
      currentLang === "en"
        ? "Luis-Alvarez-CV-EN.pdf"
        : "Luig-Alvarez-CV-ES.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      id="download-button"
      onClick={handleDownload}
      style={{
        color: theme.palette.text.primary,
        background: "transparent",
        border: "2px solid",
        borderRadius: "20px",
        padding: "0.5rem 1rem",
        cursor: "pointer",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      {t("download_cv")}
      <DownloadIcon />
    </button>
  );
}

export default DownloadCVButton;
