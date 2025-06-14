import { useState } from "react";

import { Payment } from "../../molecules/Payment/Payment";
import registros from "../../../data/datatest.json";


import "./PaymentsContainer.css";

export const PaymentsContainer = () => {
  const [payments, setPayments] = useState(registros);

  return (
    <section className="paymentsContainer">
      {payments.map((payment) => (
        <Payment key={payment.id} payment={payment} />
      ))}
    </section>
  );
};
