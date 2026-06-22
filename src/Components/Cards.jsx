import { useTranslation } from "react-i18next";
import { FiArrowUpRight } from "react-icons/fi";

const Cards = ({ project }) => {
  const { t } = useTranslation();

  return (
    <div className="card">
      {project.pic ? (
        <img
          className="thumb"
          src={project.pic}
          alt={project.name}
          loading="lazy"
        />
      ) : null}
      <div className="body">
        <h3>{project.name}</h3>
        {project.desc ? <p>{project.desc}</p> : null}
        <div className="tags">
          {(project.tags || []).map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="card-links">
          <a href={project.live} target="_blank" rel="noreferrer">
            {t("project.live")} <FiArrowUpRight size={14} />
          </a>
          <a href={project.repo} target="_blank" rel="noreferrer">
            {t("project.source")} <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
