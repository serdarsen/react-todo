import React from "react";
import Form from "./Form";
import Modal from "./Modal";

function CreateModal({ isOpen, onCancel, onSubmit }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
      <Form onCancel={onCancel} onSubmit={onSubmit} />
    </Modal>
  );
}

export default CreateModal;
