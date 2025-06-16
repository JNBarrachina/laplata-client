import { useState, useRef } from "react";

import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { TransactionsContainer } from "../../organisms/TransactionsContainer/TransactionsContainer";
import { BalanceData } from "../../molecules/BalanceData/BalanceData";
import { YearFilter } from "../../molecules/TransactionsFilters/YearFilter";
import { MonthFilter } from "../../molecules/TransactionsFilters/MonthFilter";
import { NewTransaction } from "../../molecules/NewTransaction/NewTransaction";

import "./Dashboard.css";

export const Dashboard = () => {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));

  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const handleMonthChange = (month) => {
    setSelectedMonth(month);

    if (selectedYear === "all" && month !== "all") {
      setSelectedYear("2025");
    }
  };

  const handleYearChange = (year) => {
    setSelectedYear(year);

    if (year === "all") {
      setSelectedMonth("all");
    }
  };

  const dialogRef = useRef(null);
  const openModal = () => {
    dialogRef.current?.showModal();
  };

  return (
    <>
      <DashboardHeader />
      <main className="dashboardMain">
        <section className="paymentsHeaderWelcome">
          <h1 className="dashboardTitle">
            Welcome, {userLogged.name} {userLogged.lastname}
          </h1>
        </section>
        <section className="paymentsHeaderFilters">
          <div className="paymentsFilters">
            <YearFilter
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
            />
            <MonthFilter
              selectedMonth={selectedMonth}
              onMonthChange={handleMonthChange}
              isDisabled={selectedYear === "all"}
            />
          </div>
          <div className="newTransactionBtn">
            <button onClick={openModal}>+ New Transaction</button>
          </div>
        </section>
        <TransactionsContainer year={selectedYear} month={selectedMonth} />
        <BalanceData />
        <NewTransaction
          dialogRef={dialogRef}
          modalType="Create"
          transactionData={""}
        />
      </main>
    </>
  );
};
