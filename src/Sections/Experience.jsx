import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "../Components/Skills";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <div id="experience">
      <Skills />

      <div className="timeline-container">
        <h1 className="title-skills underline text-center">
          {t("experiencetitle")}
        </h1>
        <VerticalTimeline lineColor="#213555">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "#444" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2014"
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
            date="2014 - 2017"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {t("experiencetitle2")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl ">
              {t("experienceLieu2")}
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {t("experiencetitle3")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              {t("experienceLieu3")}
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {t("experiencetitle4")}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              {t("experienceLieu4")}
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
