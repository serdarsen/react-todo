import { useState } from "react";
import PromptButtonGroup from "./PromptButton";
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
      <input
        type="text"
        className="app__form-message app__form-element"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        maxLength={255}
        title={message}
      />
      <PromptButtonGroup onCancel={onCancel} cancelLabel="Cancel" submitLabel="Add" />
    </form>
  );
};

export default Form;
