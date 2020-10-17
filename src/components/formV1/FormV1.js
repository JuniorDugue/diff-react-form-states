import React, { useState } from "react";
import { login } from "./../utils";

function FormV1() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("username");
  const [password, setPassword] = useState("password");

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    console.dir("clicked");
    try {
      await login({});
      // debugger;
    } catch (error) {
      // debugger;
    }

    setLoading(false);
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <p>Please Login</p>
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
