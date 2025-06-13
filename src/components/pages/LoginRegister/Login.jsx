import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import "./LoginRegister.css";
import { HomeHeader } from "../../organisms/HomeHeader/HomeHeader";

export const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginmessage, setLoginmessage] = useState(
    "Introduce tu usuario y contraseña"
  );

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <HomeHeader />
      <main>
        <article className="userFormContainer">
          <h1>Login</h1>
          <form action="" className="userForm">
            <p>{loginmessage}</p>
            <input
              type="text"
              placeholder="Usename"
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="primary" onClick={handleLogin}>
              Login
            </button>
          </form>
        </article>
      </main>
    </>
  );
};
