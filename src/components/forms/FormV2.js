import React, { useState, useReducer } from "react";
import { login } from "../utils";
import loginReducer from "./reducer";

const initialState = {
  username: "",
  password: "",
  loading: false,
  loggedIn: false,
  error: null,
};

function FormV2() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const [state, dispatch] = useReducer(loginReducer, initialState);
  const { username, password, loading, loggedIn, error } = state;

  async function onSubmit(e) {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      await login({ username, password });
      // we'll get to this line if its a positive return
      dispatch({ type: "success", value: initialState });
    } catch (error) {
      // we'll get to this line if its a negative return
      dispatch({ type: "error", value: error });
    }
    // dispatch({ type: "reset", value: initialState });
  }

  return (
    <>
      {loggedIn ? (
        <>
          <h1>welcome {username}!</h1>
          <button onClick={() => dispatch({ type: "logout", value: initialState })}>Log Out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p>Form with useReducer</p>
          {error ? <p className="error">{error}</p> : null}
          <input type="text" placeholder="username" value={username} onChange={(e) => dispatch({ type: "field", field: "username", value: e.target.value })} />
          <input type="password" placeholder="password" value={password} onChange={(e) => dispatch({ type: "field", field: "password", value: e.target.value })} />
          <button type="submit" disabled={loading}>
            Log in
          </button>
        </form>
      )}
    </>
  );
}

export default FormV2;
