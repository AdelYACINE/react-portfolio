import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "../Components/Skills";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const Experience = () => {
  const { t } = useTranslation();

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    if (inView) {
      setIsInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref} id="experience" style={{ overflow: "hidden" }}>
      <Skills />

      <div className="timeline-container">
        <motion.h1
          initial={{ x: -1000 }}
          animate={isInView && { x: 0 }}
          transition={{ duration: 0.5 }}
          className="title-skills underline text-center"
        >
          {t("experiencetitle")}
        </motion.h1>
        <VerticalTimeline lineColor="#213555">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {t("experiencetitle1")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              {t("experienceLieu1")}
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {t("experiencetitle2")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              {t("experienceLieu2")}
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
