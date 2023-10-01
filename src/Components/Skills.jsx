import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Skills = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} className="container-skills" style={{ overflow: "hidden" }}>
      <motion.h1
        initial={{ x: -1000 }}
        animate={isInView && { x: 0 }}
        transition={{ duration: 1 }}
        className="title-skills underline"
      >
        {t("skillstitle")}
      </motion.h1>
      <motion.div
        initial={{ x: 1000 }}
        animate={isInView && { x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="heading-skills">Front-end</h2>
        <p className="text-skills">
          HTML , CSS , React.js , Javascript , Bootswatch , GIT
        </p>
      </motion.div>
      <motion.div
        initial={{ x: 1000 }}
        animate={isInView && { x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="heading-skills">Languages</h2>
        <p className="text-skills">Javascript</p>
      </motion.div>
    </div>
  );
};

export default Skills;
