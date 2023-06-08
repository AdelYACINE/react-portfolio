import Cards from "../Components/Cards";
import { ProjectsList } from "../Helper/ProjectsList";

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h1 className="title-projects underline">My projects</h1>
      <div className="cards-container">
        {ProjectsList.map((proj) => {
          return <Cards key={proj.id} project={proj} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
