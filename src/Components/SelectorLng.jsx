import { useTranslation } from "react-i18next";

const SelectorLng = () => {
  const { i18n } = useTranslation();
  const current = i18n.resolvedLanguage === "fr" ? "fr" : "en";

  const toggle = () => i18n.changeLanguage(current === "en" ? "fr" : "en");

  return (
    <button className="lang" onClick={toggle} aria-label="Switch language">
      {current === "en" ? "EN / FR" : "FR / EN"}
    </button>
  );
};

export default SelectorLng;
