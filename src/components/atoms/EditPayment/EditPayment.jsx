import "./EditPayment.css";

export const EditPayment = ({ action }) => {
  return (
    <button className="paymentBtn btnEdit" onClick={action}>
      <img
        className="paymentImg imgEdit"
        src="/src/assets/edit.svg"
        alt="Edit"
      />
    </button>
  );
};
