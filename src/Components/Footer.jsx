import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="wrap">
        <span className="mono">{t("footer.left")}</span>
        <span className="mono">{t("footer.right")}</span>
      </div>
    </footer>
  );
};

export default Footer;
