import { useContext } from "react"

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext"

export const UserProfileChart = () => {

    const { userTransactionsList } = useContext(UserTransactionsContext);

    return (
        <div>UserProfileChart</div>

    )
}
