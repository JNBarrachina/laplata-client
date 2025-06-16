import { Link } from "react-router-dom";
import { useRef } from "react";
import { UserLogout } from "../../molecules/UserLogout/UserLogout";

import "./DashboardHeader.css";

export const DashboardHeader = () => {
  const modalRef = useRef(null);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  return (
    <>
      <header className="dashboardHeaderContainer">
        <img src="/src/assets/laplata.png" alt="" className="dashboardLogo" />
        <nav className="dashboardNav">
          <Link to="/dashboard" className="dashboardHeaderLink">
            <img
              className="dashboardHeaderImg"
              src="/src/assets/dashboard.svg"
              alt=""
            />
            <p className="linkText">Dashboard</p>
          </Link>
          <Link to="/" className="dashboardHeaderLink">
            <img
              className="dashboardHeaderImg"
              src="/src/assets/useraccount.svg"
              alt=""
            />
            <p className="linkText">Profile</p>
          </Link>
          <button className="dashboardHeaderLink" onClick={openModal}>
            <img
              className="dashboardHeaderImg"
              src="/src/assets/logout.svg"
              alt=""
            />
            <p className="linkText">Logout</p>
          </button>
        </nav>
        <UserLogout modalRef={modalRef} />
      </header>
    </>
  );
};
