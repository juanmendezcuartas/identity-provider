import React, { useState, useEffect } from "react";
import "../AdminConsole/AdminConsole.css";
import InfoData from "./components/InfoData.jsx";
import Forms from "./components/Forms.jsx";

function AdminConsole({ user, Logout }) {
  /* hooks */
  const [isOpen, setIsOpen] = useState(false);
  const submitHandlerOff = (e) => {
    e.preventDefault();
    Logout();
  };

  /* funciones */
  const sendData = async (details) => {
    console.log(details);
    fetch("http://0.0.0.0:3006/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <h2 className="bienvenida">
        Bienvenido, <span>{user.name}</span>
      </h2>
      {/* Lateral Izquierda */}
      <div className="admin-panel clearfix">
        <div className="slidebar">
          <div className="logo">
            <a href=""></a>
          </div>
          <ul>
            <li>
              <a href="#users" id="targeted">
                Users
              </a>
            </li>
            <li>
              <a href="#roles">Roles</a>
            </li>
          </ul>
        </div>
        {/* Top */}
        <div className="main">
          <ul className="topbar clearfix">
            <li>
              <button className="logout" onClick={submitHandlerOff}>
                Logout
              </button>
            </li>
          </ul>
          {/* Info Body */}
          <div className="mainContent clearfix">
            <div id="users">
              <h2 className="profiles-setting">
                <span className="icon"></span>Users
              </h2>
              <InfoData text="users" />
            </div>
            <div id="roles">
              <h2 className="header">Roles</h2>
            </div>
          </div>
          <ul className="statusbar">
            <li>
              <a href=""></a>
            </li>
            <li>
              <a href=""></a>
            </li>
            <li className="crud">
              <Forms
                open={isOpen}
                onClose={() => setIsOpen(false)}
                sendData={sendData}
              >
                Registrar
              </Forms>
              <button onClick={() => setIsOpen(true)}>Registrar</button>

              <button>Actualizar</button>
              <button>Eliminar</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminConsole;
