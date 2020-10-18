import React, { useState } from "react";
import { login } from "../utils";

function FormV2() {
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
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button type="submit">Log in</button>
      </form>
    </>
  );
}

export default FormV2;
