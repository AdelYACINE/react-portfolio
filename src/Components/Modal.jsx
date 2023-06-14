import { useRef } from "react";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation();

  return (
    <div>
      <button className="btn btn-modal" onClick={openModal}>
        {t("projetButton")}
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
              {t("linkGithub")}
            </a>
            <a
              href={project.live}
              className="link link-secondary"
              target="_blank"
              rel="noreferrer"
            >
              {t("linkDirect")}
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
