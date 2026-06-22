import { useTranslation } from "react-i18next";
import { FiMail } from "react-icons/fi";
import Reveal from "../Components/Reveal";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal>
          <p className="mono" style={{ marginBottom: 18 }}>
            04 — {t("sections.contact").toUpperCase()}
          </p>
          <h2>{t("contact.title")}</h2>
          <a className="mail" href="mailto:ahmed95yacine@gmail.com">
            <FiMail size={18} /> ahmed95yacine@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
