import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { PaymentsContainer } from "../../organisms/PaymentsContainer/PaymentsContainer";
import { BalanceData } from "../../molecules/BalanceData/BalanceData";
import { YearFilter } from "../../molecules/PaymentFilters/YearFilter";
import { MonthFilter } from "../../molecules/PaymentFilters/MonthFilter";

import "./Dashboard.css";

export const Dashboard = () => {

  return (
    <>
      <DashboardHeader />
      <main className="dashboardMain">
        <section className="paymentsHeader">
          <h1 className="dashboardTitle">Welcome, User</h1>
          <div className="paymentsFilters">
            <YearFilter />
            <MonthFilter />
          </div>
          <div className="financialBtns">
            <button className="addDataBtn addExpenseBtn">+ Add Expense</button>
            <button className="addDataBtn addIncomeBtn">+ Add Income</button>
          </div>
        </section>
        <PaymentsContainer />
        <BalanceData />
      </main >
    </>
  );
};
