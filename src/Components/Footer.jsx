import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <h2 className="footer-text">{t("footer")}</h2>
    </footer>
  );
};

export default Footer;
