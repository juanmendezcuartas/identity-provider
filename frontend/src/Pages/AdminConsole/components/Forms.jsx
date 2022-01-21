import React, { useState } from "react";
import "./Forms.css";

function Forms({ open, children, onClose, sendData }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    sendData(details);
  };

  if (!open) return null;

  return (
    <>
      <form action="" className="formulario" onSubmit={submitHandler}>
        <div className="formsButton">
          <button onClick={onClose}>Close</button>
        </div>

        <h1 className="formulario__titulo">{children}</h1>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <label htmlFor="" className="formulario__label">
          Name
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          value={details.email}
        />
        <label htmlFor="" className="formulario__label">
          Email
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setDetails({ ...details, phone: e.target.value })}
          value={details.phone}
        />
        <label htmlFor="" className="formulario__label">
          Phone
        </label>
        <input
          type="text"
          className="formulario__input"
          onChange={(e) => setDetails({ ...details, role: e.target.value })}
          value={details.role}
        />
        <label htmlFor="" className="formulario__label">
          Role
        </label>
        <input type="submit" className="formulario__submit" />
      </form>
    </>
  );
}

export default Forms;
