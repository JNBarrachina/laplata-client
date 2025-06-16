import { useNavigate } from "react-router-dom";
import "./UserLogout.css";

export const UserLogout = ({ modalRef }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("userLogged");
    navigate("/");
  };

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <dialog ref={modalRef} className="logoutTooltip">
      <div className="logoutTooltipContainer">
        <h3>Are you sure you want to log out?</h3>
        <div className="logoutBtnsContainer">
          <button className="backButton" onClick={closeModal}>
            Back
          </button>
          <button className="logoutBtns" onClick={logout}>
            Log out
          </button>
        </div>
      </div>
    </dialog>
  );
};
