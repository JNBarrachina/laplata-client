import { useState, useContext, useEffect } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./PaymentsContainer.css";
import { Payment } from "../../molecules/Payment/Payment";

export const PaymentsContainer = () => {
  const { userTransactionsList } = useContext(UserTransactionsContext);

  return (
    <section className="paymentsContainer">
      {userTransactionsList.map((transaction) => (
        <Payment key={transaction.id} transaction={transaction} />
      ))}
    </section>
  );
};
