import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Customers", path: "/customers" },
    { name: "Events", path: "/events" },
    { name: "Vendors", path: "/vendors" },
    { name: "Investors", path: "/investors" },
    { name: "Employees", path: "/employees" },
    { name: "Payments", path: "/payments" },
    { name: "Expenses", path: "/expenses" }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        Event Manager
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "menu-link active"
                  : "menu-link"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;