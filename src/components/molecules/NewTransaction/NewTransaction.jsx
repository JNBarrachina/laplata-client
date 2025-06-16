import { useContext, useRef } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./NewTransaction.css";

export const NewTransaction = ({ dialogRef, modalType, transactionData }) => {
    const { userTransactionsList, setUserTransactionsList } = useContext(
        UserTransactionsContext
    );

    const addTransaction = () => {
        const newTransaction = {
            id: Date.now(),
            name: "New Transaction",
            amount: 0,
        };
        setUserTransactionsList([...userTransactionsList, newTransaction]);
        closeModal();
    };

    const editTransaction = () => {
        const editTransaction = {
            name: "Edit Transaction",
            amount: 0,
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
                        <input type="text" name="name" id="name" placeholder={transactionData.title} />
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" id="amount" placeholder={transactionData.amount} />
                        <label htmlFor="category">Category</label>
                        <select
                            className="newTransactionCategory"
                            name="category"
                            id="category"
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
                        ></textarea>
                    </form>

                    <div className="newTransactionBtns">
                        {modalType == "Create" && (
                            <button onClick={addTransaction}>Add Transaction</button>
                        )}
                        {modalType == "Edit" && (
                            <button onClick={editTransaction}>Edit Transaction</button>
                        )}

                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            </dialog>
        </>
    );
};
