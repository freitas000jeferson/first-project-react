import React, { useState } from "react";
import axios from "axios";

function ApiGithub(props) {
  const [user, setUser] = useState("");
  //   const [result, setResult] = useState({});

  async function request() {
    try {
      const res = await axios.get(`https://api.github.com/users/${user}/repos`);
      // .then((response) => console.log(response));
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <h1>Api do github</h1>
      <input
        placeholder="seu email do git"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      ></input>
      <button type="button" onClick={request}>
        GET
      </button>
    </>
  );
}

export default ApiGithub;
