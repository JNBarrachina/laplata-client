import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { PaymentsContainer } from "../../organisms/PaymentsContainer/PaymentsContainer";
import { BalanceData } from "../../molecules/BalanceData/BalanceData";

import "./Dashboard.css";

export const Dashboard = () => {

  return (
    <>
      <DashboardHeader />
      <main className="dashboardMain">
        <section className="paymentsHeader">
          <h1>Welcome, User</h1>
          <div className="financialBtns">
            <button className="addDataBtn addExpenseBtn">+ Add Expense</button>
            <button className="addDataBtn addIncomeBtn">+ Add Income</button>
          </div>
        </section>
        <section className="paymentsFilters">
          <label htmlFor="">Year: </label>
          <select name="yearFilter" id="year">
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
          </select>
          <label htmlFor="month">Month: </label>
          <select name="monthFilter" id="month">
            <option value="all">All</option>
            <option value="january">January</option>
            <option value="february">February</option>
            <option value="march">March</option>
            <option value="april">April</option>
            <option value="may">May</option>
            <option value="june">June</option>
            <option value="july">July</option>
            <option value="august">August</option>
            <option value="september">September</option>
            <option value="october">October</option>
            <option value="november">November</option>
            <option value="december">December</option>
          </select>
        </section>
        <PaymentsContainer />
        <BalanceData />
      </main>
    </>
  );
};
