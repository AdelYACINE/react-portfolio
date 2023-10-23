import { useTranslation } from "react-i18next";
import Cards from "../Components/Cards";
import { ProjectsList } from "../Helper/ProjectsList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Projects = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="projects-container"
      id="projects"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        initial={{ y: 1500 }}
        animate={isInView && { y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="title-projects underline">{t("projetTitle")}</h1>
        <div className="cards-container">
          {ProjectsList.map((proj) => {
            return <Cards key={proj.id} project={proj} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
