import ActionModal from "./ActionModal";

const DeleteModal = ({
  isOpen, onCancel, onSubmit, text,
}) => (
  <ActionModal
    isOpen={isOpen}
    onCancel={onCancel}
    onSubmit={onSubmit}
    text={text}
  />
);

export default DeleteModal;
