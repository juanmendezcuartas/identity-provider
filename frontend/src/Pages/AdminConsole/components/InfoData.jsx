import React, { useState, useEffect } from "react";
import "./InfoData.css";

function InfoData(text) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch("http://0.0.0.0:3006/users");
    const users = await data.json();

    setUsers(users);
  };

  return (
    <div className="divTable">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>
      </table>
      {users.map((item, index) => {
        return (
          <tbody key={index} className="tbody">
            <tr>
              <td>
                <strong>{item[1]}</strong>
              </td>
              <td>{item[2]}</td>
              <td>{item[3]}</td>
              <td>{item[4]}</td>
            </tr>
          </tbody>
        );
      })}
    </div>
  );
}

export default InfoData;
