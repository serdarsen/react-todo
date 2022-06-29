import Form from "./Form";
import Modal from "./Modal";

const CreateModal = ({ isOpen, onCancel, onSubmit }) => (
  <Modal isOpen={isOpen} onRequestClose={onCancel}>
    <Form onCancel={onCancel} onSubmit={onSubmit} />
  </Modal>
);

export default CreateModal;
