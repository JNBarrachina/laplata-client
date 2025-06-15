import { useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./PaymentsContainer.css";
import { Payment } from "../../molecules/Payment/Payment";

export const PaymentsContainer = () => {
  const { userTransactionsList, setUserTransactionsList } = useContext(UserTransactionsContext);
  console.log(userTransactionsList);

  return (
    <section className="paymentsContainer">
      {userTransactionsList.map((transaction) => (
        <Payment key={transaction.id} transaction={transaction} />
      ))}
    </section>
  );
};
