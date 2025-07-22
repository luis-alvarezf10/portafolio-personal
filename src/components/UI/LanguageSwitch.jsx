import React from "react";
import { Switch, FormControlLabel } from "@mui/material";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const handleChange = (event) => {
    const isEnglish = event.target.checked;
    i18n.changeLanguage(isEnglish ? "en" : "es");
  };

  return (
    <FormControlLabel
      control={
        <Switch
          onChange={handleChange}
          checked={i18n.language === "en"}
          color="primary"
        />
      }
      label="EN"
      labelPlacement="start"
    />
  );
};

export default LanguageSwitch;
