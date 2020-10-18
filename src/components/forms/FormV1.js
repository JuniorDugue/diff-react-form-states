import React, { useState } from "react";
import { login } from "../utils";

function FormV1() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    // console.dir("clicked");
    try {
      await login({ username, password });
      setLoggedIn(true);
      // debugger;
    } catch (error) {
      setError("Incorrect username or password");
      setUsername("");
      setPassword("");
      // debugger;
    }

    setLoading(false);
  }
  return (
    <>
      {loggedIn ? (
        <>
          <h1>Welcome {username}</h1>
          <button onClick={() => setLoggedIn(false)}>Log out</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <p>Form with useState</p>
          {error ? <p className="error">{error}</p> : null}
          <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit" disabled={loading}>
            Log In
          </button>
        </form>
      )}
    </>
  );
}

export default FormV1;
