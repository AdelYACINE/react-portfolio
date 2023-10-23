import Modal from "./Modal";

const Cards = ({ project }) => {
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="pic-card">
        <img src={project.pic} alt="proj-pic" loading="lazy" />
      </figure>

      <div>
        <Modal project={project} />
      </div>
    </div>
  );
};

export default Cards;
