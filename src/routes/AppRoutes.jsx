import { Routes, Route } from "react-router-dom";

import DashboardPage from "../modules/Dashboard/DashboardPage";
import CustomerPage from "../modules/Customer/CustomerPage";
import EventPage from "../modules/Event/EventPage";
import VendorPage from "../modules/Vendor/VendorPage";
import InvestorPage from "../modules/Invester/InvestorPage";
import MainLayout from "../layouts/MainLayout"
import CustomerDetails from "../modules/Customer/CustomerDetails";

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route
          path="/customers/:id"
          element={<CustomerDetails/>}
        />
        <Route path="/events" element={<EventPage />} />
        <Route path="/vendors" element={<VendorPage />} />
        <Route path="/investors" element={<InvestorPage />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;