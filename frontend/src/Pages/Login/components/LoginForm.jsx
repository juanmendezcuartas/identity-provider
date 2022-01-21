import React, { Fragment, useState } from "react";
import "../components/LoginForm.css";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    Login(details);
  };

  return (
    <Fragment>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="username"
              name="usuario"
              onChange={(e) => setDetails({ ...details, name: e.target.value })}
              value={details.name}
            />
            <input
              type="password"
              placeholder="password"
              password="password"
              onChange={(e) =>
                setDetails({ ...details, password: e.target.value })
              }
              value={details.password}
            />
            <button>login</button>
            {error != "" ? <div className="error">{error}</div> : ""}
          </form>
        </div>
      </div>
    </Fragment>
  );
}

export default LoginForm;
