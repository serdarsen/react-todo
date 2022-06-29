import "./promptButton.scss";

const PromptButton = ({
  onCancel = () => {},
  onSubmit = () => {},
  cancelLabel = "Cancel",
  submitLabel = "Save",
}) => (
  <div className="app__promptbutton">
    <button
      type="button"
      className="app__form-button"
      onClick={onCancel}
      title={cancelLabel}
    >
      {cancelLabel}
    </button>
    <button
      type="submit"
      className="app__promptbutton-submit app__form-button"
      onClick={onSubmit}
      title={submitLabel}
    >
      {submitLabel}
    </button>
  </div>
);

export default PromptButton;
