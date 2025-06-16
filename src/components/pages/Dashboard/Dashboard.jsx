import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { PaymentsContainer } from "../../organisms/PaymentsContainer/PaymentsContainer";
import { BalanceData } from "../../molecules/BalanceData/BalanceData";
import { YearFilter } from "../../molecules/PaymentFilters/YearFilter";
import { MonthFilter } from "../../molecules/PaymentFilters/MonthFilter";
import { NewTransaction } from "../../molecules/NewTransaction/NewTransaction";

import "./Dashboard.css";

export const Dashboard = () => {
  const userLogged = JSON.parse(localStorage.getItem("userLogged"));
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
            <YearFilter />
            <MonthFilter />
          </div>
          <div className="newTransactionBtn">
            <button onClick={openModal}>+ New Transaction</button>
          </div>
        </section>
        <PaymentsContainer />
        <BalanceData />
        <NewTransaction dialogRef={dialogRef} modalType="Create" transactionData={""} />
      </main>
    </>
  );
};
