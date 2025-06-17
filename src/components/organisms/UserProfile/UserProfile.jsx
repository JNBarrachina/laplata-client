import { useContext } from "react";

import { UserTransactionsContext } from "../../../contexts/UserTransactionsContext";

import { DashboardHeader } from "../DashboardHeader/DashboardHeader";
import { TransactionsPerYearChart } from "../../molecules/UserProfileCharts/TransactionsPerYearChart";

export const UserProfile = () => {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  const { userTransactionsList } = useContext(UserTransactionsContext);

  return (
    <>
      <DashboardHeader />
      <main className="dashboardMain">
        <section className="userProfileData">
          <img src="/userimg.svg" alt="" className="userProfileImg" />
          <h2 className="userProfileName">
            {userLogged.name} {userLogged.lastname}
          </h2>
          <p className="userProfileEmail">{userLogged.email}</p>
          <p className="userProfilePhone">+34 666 666 666</p>
          <p className="userProfileAddress">Main Street 123</p>
          <p className="userProfileCity">Valencia</p>
          <p className="userProfileCountry">Spain</p>
        </section>
        <section className="userTransactionsInfo">
          <h2>My transactions</h2>
          <p>Total: {userTransactionsList.length}</p>
          <p>
            Incomes:{" "}
            {
              userTransactionsList.filter(
                (transaction) => transaction.type === "income"
              ).length
            }
          </p>
          <p>
            Expenses:{" "}
            {
              userTransactionsList.filter(
                (transaction) => transaction.type === "expense"
              ).length
            }
          </p>
        </section>
        <section className="userTransactionsCharts">
          <TransactionsPerYearChart />
        </section>
      </main>
    </>
  );
};
