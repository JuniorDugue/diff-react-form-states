import React, { useState } from "react";
import { login } from "../utils";
import loginReducer from "./reducer";

const initialState = {
  username: "",
  password: "",
}

function FormV2() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState, init)

  async function onSubmit(e) {
    e.preventDefault();
    try {
      await login({});
    } catch (error) {}
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <p>Intermediate Form</p>
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default FormV2;
