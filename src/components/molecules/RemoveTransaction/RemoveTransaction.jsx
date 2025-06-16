import { useState, useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import "./RemoveTransaction.css";

export const RemoveTransaction = ({ tooltipRef, transaction }) => {
    const { userTransactionsList, setUserTransactionsList } = useContext(UserTransactionsContext);

    const closeTooltip = () => {
        tooltipRef.current?.close();
    }

    const removeTransaction = () => {
        const newTransactionsList = userTransactionsList.filter((transactionChecked) => transactionChecked.id !== transaction.id);

        console.log(newTransactionsList);
        setUserTransactionsList(newTransactionsList);

        closeTooltip();
    }

    return (
        <dialog ref={tooltipRef} className="removeTransactionTooltip">
            <div className="removeTransactionTooltipContainer">
                <p>¿Seguro que quieres eliminar esta transacción?</p>
                <p className="removeTransactionTitle">{transaction.title}</p>
                <div className="removeTransactionBtnsContainer">
                    <button className="removeTransactionBtns removeCancelBtn" onClick={closeTooltip}>No</button>
                    <button className="removeTransactionBtns removeConfirmBtn" onClick={removeTransaction}>Si</button>
                </div>
            </div>
        </dialog>
    )
}
