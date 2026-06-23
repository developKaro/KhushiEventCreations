import DashboardCards from "./DashboardCards";
import QuickActions from "./QuickActions";
import "./Dashboard.css";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">
        Dashboard
      </h1>

      <DashboardCards />
      <QuickActions />
    </div>
  );
};

export default DashboardPage;