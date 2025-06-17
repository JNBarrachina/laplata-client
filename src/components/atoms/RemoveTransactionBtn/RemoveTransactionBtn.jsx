import "./RemoveTransactionBtn.css";

export const RemoveTransactionBtn = ({ action }) => {
  return (
    <button className="paymentBtn btnRemove" onClick={action}>
      <img className="paymentImg imgRemove" src="/delete.svg" alt="Delete" />
    </button>
  );
};
