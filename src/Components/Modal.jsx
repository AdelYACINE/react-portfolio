import { useRef } from "react";

const Modal = ({ project }) => {
  const modalRef = useRef(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <button className="btn btn-modal" onClick={openModal}>
        View More
      </button>

      <dialog className="modal" ref={modalRef}>
        <form method="dialog" className="modal-box">
          <img
            src={project.pic}
            alt="img-box-modal"
            className="img-box-modal"
          />
          <h3 className="font-bold text-4xl text-center">{project.name}</h3>

          <div className="container-link">
            <a
              href={project.repo}
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              Check Out Github Repo
            </a>
            <a
              href={project.live}
              className="link link-secondary"
              target="_blank"
              rel="noreferrer"
            >
              Go Live
            </a>
          </div>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button onClick={closeModal}>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
