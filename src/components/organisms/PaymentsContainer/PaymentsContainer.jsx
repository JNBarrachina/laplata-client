import { useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./PaymentsContainer.css";

export const PaymentsContainer = () => {
  const { UserTransactionsList, setUserTransactionsList } = useContext(UserTransactionsContext);
  console.log(UserTransactionsList);

  // return (
  //   <section className="paymentsContainer">
  //     {payments.map((payment) => (
  //       <Payment key={payment.id} payment={payment} />
  //     ))}
  //   </section>
  // );
};
