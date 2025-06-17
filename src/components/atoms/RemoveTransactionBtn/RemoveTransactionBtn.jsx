import "./RemoveTransactionBtn.css";

export const RemoveTransactionBtn = ({ action }) => {
  return (
    <button className="paymentBtn btnRemove" onClick={action}>
      <img className="paymentImg imgRemove" src="/src/assets/delete.svg" alt="Delete" />
    </button>
  );
};
