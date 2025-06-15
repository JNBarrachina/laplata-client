
import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { PaymentsContainer } from "../../organisms/PaymentsContainer/PaymentsContainer";
import { BalanceData } from "../../molecules/BalanceData/BalanceData";
import { YearFilter } from "../../molecules/PaymentFilters/YearFilter";
import { MonthFilter } from "../../molecules/PaymentFilters/MonthFilter";

import "./Dashboard.css";

export const Dashboard = () => {
  const userLogged = JSON.parse(localStorage.getItem("userRegistered"));

  return (
    <>
      <DashboardHeader />
      <main className="dashboardMain">
        <section className="paymentsHeader">
          <h1 className="dashboardTitle">Welcome, {userLogged.name} {userLogged.lastname}</h1>
          <div className="paymentsFilters">
            <YearFilter />
            <MonthFilter />
          </div>
          <div className="financialBtns">
            <button className="addTransactionBtn">+ Add Transaction</button>
          </div>
        </section>
        <PaymentsContainer />
        <BalanceData />
      </main >
    </>
  );
};
