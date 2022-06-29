import "./deleteButton.scss";

const DeleteButton = ({ onClick }) => (
  <div className="app__deletebutton">
    <span
      className="app__button-red"
      size={32}
      onClick={onClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      title="Delete all completed"
    >
      Delete all completed
    </span>
  </div>
);

export default DeleteButton;
