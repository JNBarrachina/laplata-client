import { Payment } from "../../molecules/Payment/Payment";
import "./PaymentsContainer.css";

export const PaymentsContainer = () => {
  return (
    <div className="paymentsContainer">
      <Payment />
      <Payment />
      <Payment />
      <Payment />
    </div>
  );
};
