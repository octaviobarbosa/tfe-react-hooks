import React, { useState } from "react";
import "./App.css";

const InputEntrada = () => {
  const [text, setText] = useState("");
  return (
    <>
      <input 
        autoFocus 
        type="text"
        name="entrada"
        id="entrada"
        onChange={(e) => setText(e.target.value)}
        style={{
          padding: "5px",
          width: "400px",
        }}
      />
      <p
        style={{
          paddingTop: "5px",
        }}
      >
        Esse texto contém {text.length} caracteres
      </p>
    </>
  );
};

export default InputEntrada;
