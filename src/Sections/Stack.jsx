import { useTranslation } from "react-i18next";
import Reveal from "../Components/Reveal";

const Stack = () => {
  const { t } = useTranslation();
  const groups = t("stackGroups", { returnObjects: true }) || [];

  return (
    <section id="stack">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="idx">03</span>
          <h2>{t("sections.stack")}</h2>
        </Reveal>
        <Reveal className="skills-grid">
          {groups.map((g) => (
            <div className="skill" key={g.k}>
              <div className="k">{g.k}</div>
              <div className="v">
                {g.v.map((s, i) => (
                  <span key={s}>
                    {s}
                    {i < g.v.length - 1 ? <br /> : null}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Stack;
