import React from "react";
import "./footer.scss";

const Footer = ({
  onCancel = () => {},
  onSubmit = () => {},
  cancelLabel = "Cancel",
  submitLabel = "Save",
}) => (
  <div className="app__footer">
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
      className="app__footer-submit app__form-button"
      onClick={onSubmit}
      title={submitLabel}
    >
      {submitLabel}
    </button>
  </div>
);

export default Footer;
