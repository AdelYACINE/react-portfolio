import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import Reveal from "./Reveal";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <header className="hero" id="home">
      <div className="wrap">
        <Reveal className="eyebrow" y={0}>
          <span className="dot" />
          <span className="mono">{t("status")}</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1>
            {t("hero.first")} <span className="thin">{t("hero.last")}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="lead">{t("hero.lead")}</p>
        </Reveal>

        <Reveal delay={0.18} className="cta-row">
          <Link
            className="btn btn-primary"
            to="work"
            smooth
            duration={700}
            offset={-64}
          >
            {t("hero.viewWork")} <FiArrowRight size={16} />
          </Link>
          <a
            className="btn btn-ghost"
            href="/cv.pdf"
            download="Ahmed-Adel-Yacine-CV.pdf"
          >
            <FiDownload size={16} /> {t("hero.cv")}
          </a>
          <div className="socials">
            <a
              href="https://github.com/AdelYACINE"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-adel-yacine-074a461b5/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </header>
  );
};

export default Hero;
