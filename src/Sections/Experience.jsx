import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";
import Skills from "../Components/Skills";

const Experience = () => {
  return (
    <div id="experience">
      <Skills />

      <div className="timeline-container">
        <h1 className="title-skills underline text-center">Experience</h1>
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
              BAC scientifique
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              Lycée Mustapha Heddam
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2017"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Licence génie des procédés
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl ">
              Université des sciences et de la technologie d'Oran Mohamed
              Boudiaf faculté de chimie
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Master pétrochimie
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              Université des sciences et de la technologie d'Oran Mohamed
              Boudiaf faculté de chimie
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2023"
            iconStyle={{ background: "#213555", color: "#fff" }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              Formation de developement web
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-2xl">
              front-end developement online
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
