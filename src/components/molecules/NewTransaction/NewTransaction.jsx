import { useContext, useRef } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

export const NewTransaction = () => {
    const dialogRef = useRef(null);
    const { userTransactionsList, setUserTransactionsList } = useContext(UserTransactionsContext);

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };

    const addTransaction = () => {
        const newTransaction = {
            id: Date.now(),
            name: "New Transaction",
            amount: 0,
        };
        setUserTransactionsList([...userTransactionsList, transaction]);
        closeModal();
    };

    return (
        <>
            <button onClick={openModal}>+ New Transaction</button>

            <dialog ref={dialogRef} className="newTransactionDialog">
                <h2>New Transaction</h2>
                <form action="" className="newTransactionForm">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" />
                    <select name="category" id="">
                        <option value="expense">Expense</option>
                        <option value="income">Income</option>
                    </select>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </form>
                <div className="newTransactionBtns">
                    <button onClick={addTransaction}>Add Transaction</button>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </dialog>
        </>
    );
}
