import React, { useState } from "react";
import "./App.css";
import InputEntrada from "./InputEntrada";
import Login from "./Login";

const App = () => {
  const [logged, setLogged] = useState(false);

  const toggleLogin = () => {
    setLogged(!logged);
  };

  return (
    <>
      <div className="taskBox">
        <h1>Tarefa 3</h1>

        <br />

        { !logged && <Login toggleLogin={toggleLogin}/> }
        { logged && <>
          <h2>Seja bem-vindo!</h2>
          <br />
          <InputEntrada />
          <br />
          <button className="button" onClick={() => toggleLogin()}>Logout</button>
        </> }
      </div>
    </>
  );
};

export default App;
