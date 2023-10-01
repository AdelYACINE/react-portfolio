import { useTranslation } from "react-i18next";
import Cards from "../Components/Cards";
import { ProjectsList } from "../Helper/ProjectsList";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Projects = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({ triggerOnce: true });
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
      <motion.h1
        initial={{ x: -1000 }}
        animate={isInView && { x: 0 }}
        transition={{ duration: 0.5 }}
        className="title-projects underline"
      >
        {t("projetTitle")}
      </motion.h1>
      <motion.div
        initial={{ x: 1500 }}
        animate={isInView && { x: 0 }}
        transition={{ duration: 0.5 }}
        className="cards-container"
      >
        {ProjectsList.map((proj) => {
          return <Cards key={proj.id} project={proj} />;
        })}
      </motion.div>
    </div>
  );
};

export default Projects;
