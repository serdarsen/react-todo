import React from "react";
import "./actionModal.scss";
import Footer from "./Footer";
import Modal from "./Modal";

function ActionModal({
  isOpen, onCancel, onSubmit, text,
}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
      <div className="app__actionModal-content">
        <span>{text}</span>
      </div>
      <Footer
        onCancel={onCancel}
        onSubmit={onSubmit}
        cancelLabel="No"
        submitLabel="Yes"
      />
    </Modal>
  );
}

export default ActionModal;
