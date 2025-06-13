import "./Payment.css";
import { EditPayment } from "../../atoms/EditPayment/EditPayment";
import { RemovePayment } from "../../atoms/RemovePayment/RemovePayment";

export const Payment = () => {
  return (
    <div className="paymentContainer">
      <span className="paymentDate">13/06/2025</span>
      <span className="paymentText">Concepo</span>
      <span className="paymentText">Coste</span>
      <div className="btnContainer">
        <EditPayment />
        <RemovePayment />
      </div>
    </div>
  );
};
