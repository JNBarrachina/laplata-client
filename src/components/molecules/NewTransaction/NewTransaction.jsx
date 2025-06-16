import { useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./NewTransaction.css";

export const NewTransaction = ({ dialogRef, modalType, transactionData }) => {
    const { userTransactionsList, setUserTransactionsList } = useContext(
        UserTransactionsContext
    );

    const [newTitle, setNewTitle] = useState(transactionData.title);
    const [newAmount, setNewAmount] = useState(transactionData.amount);
    const [newCategory, setNewCategory] = useState("expense");
    const [newDescription, setNewDescription] = useState(transactionData.description);

    const [msg, setMsg] = useState("");

    const addTransaction = () => {
        const newId = userTransactionsList[userTransactionsList.length - 1].id + 1

        const newTransaction = {
            id: newId,
            title: newTitle,
            amount: newAmount,
            date: Date.now(),
            type: newCategory,
            description: newDescription
        };

        setUserTransactionsList([...userTransactionsList, newTransaction]);
        closeModal();
    };

    const editTransaction = () => {
        const editedTransactionData = {
            id: transactionData.id,
            name,
            amount,
            category,
            description,
        };

        setUserTransactionsList([...userTransactionsList, editTransaction]);

        closeModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
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

                    <form action="" className="newTransactionForm">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} required />
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" placeholder={transactionData.amount} onChange={(e) => setNewAmount(e.target.value)} value={newAmount} required />
                        <label htmlFor="category">Category</label>
                        <select
                            className="newTransactionCategory"
                            name="category"
                            id="category"
                            onChange={(e) => setNewCategory(e.target.value)}
                        >
                            <option value="expense">Expense</option>
                            <option value="income">Income</option>
                        </select>
                        <label htmlFor="description">Description</label>
                        <textarea
                            className="newTransactionDescription"
                            name="description"
                            id="description"
                            placeholder={transactionData.description}
                            onChange={(e) => setNewDescription(e.target.value)}
                            value={newDescription}
                        ></textarea>
                        <p>{msg}</p>
                    </form>

                    <div className="newTransactionBtns">
                        <button onClick={closeModal}>Close</button>
                        {modalType == "Create" && (
                            <button onClick={addTransaction}>Add Transaction</button>
                        )}
                        {modalType == "Edit" && (
                            <button onClick={editTransaction}>Edit Transaction</button>
                        )}

                    </div>
                </div>
            </dialog>
        </>
    );
};
