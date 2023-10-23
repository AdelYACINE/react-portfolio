import { FaGithub, FaLinkedin } from "react-icons/fa";
import p9 from "../imgs/p9.jpg";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { easeIn, motion } from "framer-motion";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.7 }}
            src={p9}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="hero-img"
          />
          <motion.div
            initial={{ x: -2000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.1 }}
            className="hero-text-content"
          >
            <h1 className="text-5xl font-bold hero-title">{t("herotitle")}</h1>
            <h2 className="text-3xl font-bold hero-title-second">
              {t("heroSecondTitle")}
            </h2>
            <p className="py-6 text-2xl">{t("herotext")}</p>

            <Link
              className="btn btn-neutral text-xl "
              to="projects"
              smooth={true}
              offset={-65}
              duration={1000}
            >
              {t("herobutton")}
            </Link>

            <div className="hero-icons">
              <a
                href="https://github.com/AdelYACINE"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={40} className="hero-icon" />
              </a>

              <a
                href="https://www.linkedin.com/in/ahmed-adel-yacine-074a461b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={40} className="hero-icon" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
