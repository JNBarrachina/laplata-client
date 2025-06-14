import { useEffect, useState } from "react"

import "../../pages/Dashboard/Dashboard.css"

export const BalanceData = () => {
    const [income, setIncome] = useState(0)
    const [expense, setExpense] = useState(0)
    const total = income - expense

    useEffect(() => {
        setIncome(2000)
        setExpense(1000)
    }, [])

    return (
        <section className="balanceDataContainer">
            <h3 className="balanceTitle">Balance</h3>
            <p className="balanceText incomeText">Income: <span className="positiveNum">{income}€</span></p>
            <p className="balanceText expenseText">Expense: <span className="negativeNum">-{expense}€</span></p>
            <p className="balanceText balanceResultText">Balance: <span className={total > 0 ? "positiveNum" : "negativeNum"}>{total}€</span></p>
        </section >
    )
}
