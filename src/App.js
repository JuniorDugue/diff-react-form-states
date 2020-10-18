import React from "react";
import "./App.css";
import FormV1 from "./components/forms/FormV1";
import FormV2 from "./components/forms/FormV2";

function App() {
  return (
    <div className="login-container">
      <h2>Form version 1</h2>
      <FormV1 />
      <FormV2/>
    </div>
  );
}

export default App;
