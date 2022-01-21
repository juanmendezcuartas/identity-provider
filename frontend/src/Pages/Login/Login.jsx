import React, { Fragment, useState, useEffect } from "react";
import "./Login.css";
import LoginForm from "./components/LoginForm";
import AdminConsole from "../AdminConsole/AdminConsole";

function Login() {
  /* Variables */
  const [peopleUser, setPeopleUser] = useState([]);
  const [user, setUser] = useState({ name: "", password: "" });
  const [error, setError] = useState("");
  /* hooks */
  useEffect(() => {
    getData();
  }, []);
  /* funciones */
  const getData = async () => {
    const data = await fetch("http://0.0.0.0:3006/users");
    const peopleUser = await data.json();

    setPeopleUser(peopleUser);
  };

  const Login = (details) => {
    peopleUser.map((item) => {
      if (details.name == item[4] && details.password == item[3]) {
        setUser({ name: item[4], password: item[3] });
      } else {
        setError("Usuario o contraseña incorrectos");
      }
    });
  };

  const Logout = () => {
    setUser({ name: "", password: "" });
  };

  return (
    <Fragment>
      {user.name != "" ? (
        <AdminConsole user={user} Logout={Logout} />
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </Fragment>
  );
}

export default Login;
