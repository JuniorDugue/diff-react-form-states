import React from "react";
import {login} from "./../utils";

function FormV1() {
  async function onSubmit(e) {
    e.preventDefault();
    try {
      await login({});
      debugger;
    } catch (error) {}
    debugger;
  }
  return (
    <div className="login-container">
      <form onSubmit={onSubmit}>
        <p>Please Login</p>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default FormV1;
