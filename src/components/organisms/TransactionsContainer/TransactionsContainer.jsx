import { useState, useContext, useEffect } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./TransactionsContainer.css";
import { Transaction } from "../../molecules/Transaction/Transaction";

export const TransactionsContainer = ({ year, month }) => {
  const { userTransactionsList } = useContext(UserTransactionsContext);

  const userTransactionsListSorted = userTransactionsList
    .filter((transaction) => {
      const transactionDate = new Date(transaction.date);
      const transactionYear = transactionDate.getFullYear().toString();
      const transactionMonth = (transactionDate.getMonth() + 1)
        .toString()
        .padStart(2, "0");

      const yearMatch = year === "all" || transactionYear === year;
      const monthMatch = month === "all" || transactionMonth === month;

      return yearMatch && monthMatch;
    })
    .sort(
      (transactionA, transactionB) =>
        new Date(transactionB.date) - new Date(transactionA.date)
    );

  return (
    <section className="transactionsContainer">
      {userTransactionsListSorted.length === 0 ? (
        <h3>No results found.</h3>
      ) : (
        userTransactionsListSorted.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))
      )}
    </section>
  );
};
