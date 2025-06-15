import "./Payment.css";

import { EditPayment } from "../../atoms/EditPayment/EditPayment";
import { RemovePayment } from "../../atoms/RemovePayment/RemovePayment";

export const Payment = ({ transaction }) => {

  return (
    <article className="paymentContainer">
      <details className="paymentDetailsContainer">
        <summary className="paymentSummary">
          <h4 className="paymentTitle">{transaction.title}</h4>
          <p className={transaction.type === "expense" ? "payAmount negativeNum" : "payAmount positiveNum"}>
            {transaction.amount}€
          </p>
          <p className="paymentDate">{transaction.date}</p>
          <div className="btnContainer">
            <EditPayment />
            <RemovePayment />
          </div>
        </summary>
        <div className="paymentDetails">
          <p className="paymentDescription">{transaction.description}</p>
        </div>
      </details>
    </article>
  );
};
