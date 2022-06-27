import React from "react";
import "./actionModal.scss";
import PromptButtonGroup from "./PromptButton";
import Modal from "./Modal";

const ActionModal = ({
  isOpen, onCancel, onSubmit, text,
}) => (
  <Modal isOpen={isOpen} onRequestClose={onCancel}>
    <div className="app__actionModal-content">
      <span>{text}</span>
    </div>
    <PromptButtonGroup
      onCancel={onCancel}
      onSubmit={onSubmit}
      cancelLabel="No"
      submitLabel="Yes"
    />
  </Modal>
);

export default ActionModal;
