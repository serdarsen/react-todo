import React, { useState } from "react";
import Footer from "./Footer";
import "./form.scss";

const Form = ({ onCancel, onSubmit }) => {
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setMessage("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit({ message });
    resetForm();
  };

  return (
    <form className="app__form" onSubmit={onSubmitForm}>
      <div className="app__form-content">
        <div className="app__form-message">
          <input
            type="text"
            className=""
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            maxLength={255}
            title={message}
          />
        </div>
      </div>
      <Footer onCancel={onCancel} cancelLabel="Cancel" submitLabel="Save" />
    </form>
  );
};

export default Form;
