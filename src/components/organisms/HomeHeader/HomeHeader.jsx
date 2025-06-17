import { Link } from "react-router-dom";

import "./HomeHeader.css";

export const HomeHeader = () => {
  return (
    <>
      <header className="homeHeaderContainer">
        <img src="/laplata.png" alt="" className="homeLogo" />
        <nav className="homeNav">
          <Link to="/">LaPlata</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      </header>
    </>
  );
};
