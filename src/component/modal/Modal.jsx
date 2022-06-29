import { useRef } from "react";
import "./modal.scss";

const Modal = ({ isOpen = null, onRequestClose, children }) => {
  const appModalRef = useRef();

  const createModalClassName = () => {
    let className = "";
    if (isOpen === true) {
      className = "app__modal app__animation-fadeinfwd";
    } else if (isOpen === false) {
      className = "app__modal app__animation-fadeinfwd-reverse";
    } else {
      className = "app__modal app__modal-hidden";
    }

    return className;
  };

  const createModalContentClassName = () => {
    let className = "";
    if (isOpen === true) {
      className = "app__modal-content app__animation-slideintop";
    } else if (isOpen === false) {
      className = "app__modal-content app__animation-slideintop-reverse";
    } else {
      className = "app__modal-content";
    }

    return className;
  };

  return (
    <div
      ref={appModalRef}
      className={createModalClassName()}
      onClick={(e) => {
        if (e.target !== appModalRef.current) {
          return;
        }
        onRequestClose();
      }}
      onKeyPress={(e) => {
        if (e.target !== appModalRef.current) {
          return;
        }
        onRequestClose();
      }}
      role="button"
      tabIndex={0}
    >
      <div
        className={createModalContentClassName()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
