import { DashboardHeader } from "../../organisms/DashboardHeader/DashboardHeader";
import { PaymentsContainer } from "../../organisms/PaymentsContainer/PaymentsContainer";

export const Dashboard = () => {
  return (
    <main className="dashboardMain">
      <DashboardHeader />
      <PaymentsContainer />
    </main>
  );
};
