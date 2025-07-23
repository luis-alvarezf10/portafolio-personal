import i18n from "../config/i18n"; 

export function downloadCV() {
  const currentLang = i18n.language;
  const fileName = currentLang === "en" ? "cv-luis-alvarez-en.pdf" : "cv-luis-alvarez-es.pdf";

  const link = document.createElement("a");
  link.href = `${process.env.PUBLIC_URL}/assets/documents/${fileName}`;
  link.download = currentLang === "en" ? "Luis-Alvarez-CV-En.pdf" : "Luigi-Alvarez-CV-Es.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
