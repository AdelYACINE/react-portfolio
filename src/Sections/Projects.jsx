import { useTranslation } from "react-i18next";
import Cards from "../Components/Cards";
import Reveal from "../Components/Reveal";
import { ProjectsList } from "../Helper/ProjectsList";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="work">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="idx">01</span>
          <h2>{t("sections.work")}</h2>
        </Reveal>
        <div className="grid">
          {ProjectsList.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <Cards project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
