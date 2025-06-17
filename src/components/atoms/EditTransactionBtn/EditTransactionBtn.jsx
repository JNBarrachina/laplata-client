import "./EditTransactionBtn.css";

export const EditTransactionBtn = ({ action }) => {
  return (
    <button className="paymentBtn btnEdit" onClick={action}>
      <img className="paymentImg imgEdit" src="/edit.svg" alt="Edit" />
    </button>
  );
};
