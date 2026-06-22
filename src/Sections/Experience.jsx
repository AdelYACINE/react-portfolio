import { useTranslation } from "react-i18next";
import Reveal from "../Components/Reveal";

const Experience = () => {
  const { t } = useTranslation();
  const timeline = t("timeline", { returnObjects: true }) || [];

  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="idx">02</span>
          <h2>{t("sections.experience")}</h2>
        </Reveal>
        <div>
          {timeline.map((row, i) => (
            <Reveal key={`${row.role}-${i}`} delay={i * 0.06} className="tl">
              <div className="when">{row.when}</div>
              <div>
                <div className="role">{row.role}</div>
                <div className="org">{row.org}</div>
                <div className="desc">{row.desc}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
