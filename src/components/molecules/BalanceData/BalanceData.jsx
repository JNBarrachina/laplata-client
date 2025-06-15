import { useEffect, useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "../../pages/Dashboard/Dashboard.css";

export const BalanceData = () => {
    const { userTransactionsList } = useContext(UserTransactionsContext);

    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

    const calculateIncome = () => {
        let totalIncome = 0;
        userTransactionsList.forEach((transaction) => {
            if (transaction.type === "income") {
                totalIncome += transaction.amount;
            }
        });
        setIncome(totalIncome.toFixed(2));
    };

    const calculateExpense = () => {
        let totalExpense = 0;
        userTransactionsList.forEach((transaction) => {
            if (transaction.type === "expense") {
                totalExpense += transaction.amount;
            }
        });
        setExpense(totalExpense.toFixed(2));
    };

    useEffect(() => {
        let newTotal = parseFloat(income) + parseFloat(expense);
        setTotal(newTotal.toFixed(2));
    }, [income, expense]);

    useEffect(() => {
        calculateIncome();
        calculateExpense();
    }, [userTransactionsList]);

    return (
        <section className="balanceDataContainer">
            <h3 className="balanceTitle">Balance</h3>
            <p className="balanceText incomeText">
                Income: <span className="positiveNum">{income}€</span>
            </p>
            <p className="balanceText expenseText">
                Expense: <span className="negativeNum">{expense}€</span>
            </p>
            <p className="balanceText balanceResultText">
                Balance:{" "}
                <span className={total > 0 ? "positiveNum" : "negativeNum"}>
                    {total}€
                </span>
            </p>
        </section>
    );
};
