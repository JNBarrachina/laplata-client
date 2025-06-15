import "./EditPaymentBtn.css";

export const EditPaymentBtn = ({ action }) => {
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
