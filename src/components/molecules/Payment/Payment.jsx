import "./Payment.css";

import { EditPayment } from "../../atoms/EditPayment/EditPayment";
import { RemovePayment } from "../../atoms/RemovePayment/RemovePayment";

export const Payment = ({ payment }) => {

  return (
    <article className="paymentContainer">
      <details className="paymentDetailsContainer">
        <summary className="paymentSummary">
          <h4 className="paymentTitle">{payment.title}</h4>
          <p className={payment.type === "expense" ? "payAmount negativeNum" : "payAmount positiveNum"}>
            {payment.amount}€
          </p>
          <p className="paymentDate">{payment.date}</p>
          <div className="btnContainer">
            <EditPayment />
            <RemovePayment />
          </div>
        </summary>
        <div className="paymentDetails">
          <p className="paymentDescription">{payment.description}</p>
        </div>
      </details>
    </article>
  );
};
