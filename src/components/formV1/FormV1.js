import React, { useState } from "react";
import { login } from "./../utils";

function FormV1() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.dir("clicked");
    try {
      await login({ username, password });
      debugger;
    } catch (error) {
      setError(error)
      debugger;
    }

    setLoading(false);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <p>Please Login</p>
        {error ? <p className="error">{error}</p> : null}
        <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </>
  );
}

export default FormV1;
