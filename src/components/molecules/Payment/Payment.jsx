import "./Payment.css";

import { EditPayment } from "../../atoms/EditPayment/EditPayment";
import { RemovePayment } from "../../atoms/RemovePayment/RemovePayment";

export const Payment = () => {
  return (
    <section className="paymentContainer">
      <h3 className="paymentText">Concepto</h3>
      <p className="paymentText">Coste</p>
      <p className="paymentDate">13/06/2025</p>
      <div className="btnContainer">
        <EditPayment />
        <RemovePayment />
      </div>
    </section>
  );
};
