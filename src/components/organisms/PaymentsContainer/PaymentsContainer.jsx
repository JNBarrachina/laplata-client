import { Payment } from "../../molecules/Payment/Payment";

import "./PaymentsContainer.css";

export const PaymentsContainer = () => {
  return (
    <article className="paymentsContainer">
      <Payment />
      <Payment />
      <Payment />
      <Payment />
    </article>
  );
};
