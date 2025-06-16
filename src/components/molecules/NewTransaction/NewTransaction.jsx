import { useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./NewTransaction.css";

export const NewTransaction = ({ dialogRef, modalType, transactionData }) => {
    const { userTransactionsList, setUserTransactionsList } = useContext(
        UserTransactionsContext
    );

    const [newTitle, setNewTitle] = useState(transactionData.title);
    const [newAmount, setNewAmount] = useState(transactionData.amount);
    const [newType, setNewCategory] = useState("expense");
    const [newDescription, setNewDescription] = useState(
        transactionData.description
    );

    const [msg, setMsg] = useState("");

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    const closeModal = () => {
        dialogRef.current?.close();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newAmount <= 0) {
            setMsg("Amount must be greater than zero");
            return;
        }

        if (modalType == "Create") {
            addTransaction();
        } else if (modalType == "Edit") {
            editTransaction();
        }
    }
    const addTransaction = () => {
        const newId = userTransactionsList[userTransactionsList.length - 1].id + 1;
        const today = new Date();

        const newTransaction = {
            id: newId,
            title: newTitle,
            amount: parseFloat(newAmount),
            date: formatDate(today),
            type: newType,
            description: newDescription,
        };

        userTransactionsList.push(newTransaction);
        setUserTransactionsList([...userTransactionsList]);

        console.log(userTransactionsList);

        closeModal();
    };

    const editTransaction = () => {
        const transactionIndex = userTransactionsList.findIndex(
            (x) => x.id == transactionData.id
        );

        const editedTransactionData = {
            id: transactionData.id,
            title: newTitle,
            amount: parseFloat(newAmount),
            date: transactionData.date,
            type: transactionData.type,
            description: newDescription,
        };

        userTransactionsList[transactionIndex] = editedTransactionData;
        setUserTransactionsList([...userTransactionsList]);

        console.log(userTransactionsList);

        closeModal();
    };


    return (
        <>
            <dialog ref={dialogRef} className="newTransactionDialog">
                <div className="newTransactionDialogContainer">
                    {modalType == "Create" && (
                        <h2 className="dialogTitle">New Transaction</h2>
                    )}
                    {modalType == "Edit" && (
                        <h2 className="dialogTitle">Edit Transaction</h2>
                    )}

                    <form action="" className="newTransactionForm" onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Insert a name for the transaction"

                            onChange={(e) => setNewTitle(e.target.value)}
                            value={newTitle}
                            required
                        />
                        <label htmlFor="amount">Amount</label>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            placeholder="Insert the amount"

                            onChange={(e) => setNewAmount(e.target.value)}
                            value={newAmount}
                            required
                        />

                        {modalType === "Create" && (
                            <>
                                <label htmlFor="category">Type</label>
                                <select
                                    className="newTransactionCategory"
                                    name="category"
                                    id="category"
                                    onChange={(e) => setNewCategory(e.target.value)}
                                >
                                    <option value="expense">Expense</option>
                                    <option value="income">Income</option>
                                </select>
                            </>
                        )}

                        <label htmlFor="description">Description</label>
                        <textarea
                            className="newTransactionDescription"
                            name="description"
                            id="description"
                            placeholder="Insert a description for the transaction"

                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                        ></textarea>
                        {msg && <p className="transactionMsgError">{msg}</p>}
                        <div className="newTransactionBtns">
                            <button className="backBtn" onClick={closeModal} type="button">
                                Back
                            </button>
                            {modalType == "Create" && (
                                <button type="submit">Add Transaction</button>
                            )}
                            {modalType == "Edit" && (
                                <button type="submit">Edit Transaction</button>
                            )}
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};
