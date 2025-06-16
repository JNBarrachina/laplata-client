import { useRef } from "react";

import "./Transaction.css";

import { EditTransactionBtn } from "../../atoms/EditTransactionBtn/EditTransactionBtn";
import { RemoveTransactionBtn } from "../../atoms/RemoveTransactionBtn/RemoveTransactionBtn";

import { NewTransaction } from "../NewTransaction/NewTransaction";
import { RemoveTransaction } from "../RemoveTransaction/RemoveTransaction";

export const Transaction = ({ transaction }) => {
  const dialogRef = useRef(null);
  const tooltipRef = useRef(null);

  const openModal = () => {
    dialogRef.current?.showModal();
  };

  const openTooltip = () => {
    tooltipRef.current?.showModal();
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
              <EditTransactionBtn action={openModal} />
              <RemoveTransactionBtn action={openTooltip} />
            </div>
          </div>
        </summary>
        <div className="paymentDetails">
          <p className="paymentDescription">
            {transaction.description == ""
              ? "No description"
              : transaction.description}
          </p>
        </div>
      </details>
      <NewTransaction
        dialogRef={dialogRef}
        modalType="Edit"
        transactionData={transaction}
      />
      <RemoveTransaction tooltipRef={tooltipRef} transaction={transaction} />
    </article>
  );
};
