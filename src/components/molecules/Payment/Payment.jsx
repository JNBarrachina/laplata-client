import "./Payment.css";

import { EditPayment } from "../../atoms/EditPayment/EditPayment";
import { RemovePayment } from "../../atoms/RemovePayment/RemovePayment";
import { useRef } from "react";
import { NewTransaction } from "../../molecules/NewTransaction/NewTransaction";

export const Payment = ({ transaction }) => {
  const dialogRef = useRef(null);
  const openModal = () => {
    dialogRef.current?.showModal();
  };
  return (
    <article className="paymentContainer">
      <details className="paymentDetailsContainer">
        <summary className="paymentSummary">
          <div className="paymentSummaryData1">
            <h4 className="paymentTitle">{transaction.title}</h4>
            <p
              className={
                transaction.type === "expense"
                  ? "payAmount negativeNum"
                  : "payAmount positiveNum"
              }
            >
              {transaction.amount}€
            </p>
          </div>
          <div className="paymentSummaryData2">
            <p className="paymentDate">{transaction.date}</p>
            <div className="btnContainer">
              <EditPayment action={openModal} />
              <RemovePayment />
            </div>
          </div>
        </summary>
        <div className="paymentDetails">
          <p className="paymentDescription">{transaction.description}</p>
        </div>
      </details>
      <NewTransaction dialogRef={dialogRef} modalType="Edit" />
    </article>
  );
};
