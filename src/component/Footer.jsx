import React from "react";
import "./footer.scss";

function Footer({
  onCancel = () => {},
  onSubmit = () => {},
  cancelLabel = "Cancel",
  submitLabel = "Save",
}) {
  return (
    <div className="app__footer">
      <button
        type="button"
        className=""
        onClick={onCancel}
        title={cancelLabel}
      >
        {cancelLabel}
      </button>
      <button
        type="submit"
        className="app__footer-resolve"
        onClick={onSubmit}
        title={submitLabel}
      >
        {submitLabel}
      </button>
    </div>
  );
}

export default Footer;
