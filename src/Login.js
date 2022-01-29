import React from "react";
import "./App.css";
import emoji from './assets/emoji.png'

const Login = ({toggleLogin}) => {
  return (
    <>
      <h2>Por favor, realize o login!</h2>
      <p>Em seguida digite o texto para a contagem de caracteres.</p>
      
      <img src={emoji} alt="emoji1" />
      <br/>
      <button className="button" onClick={() => toggleLogin()}>Login</button>
    </>
  );
};

export default Login;
