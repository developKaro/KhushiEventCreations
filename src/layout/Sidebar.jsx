import { List, ListItem, ListItemText, Box } from "@mui/material";
import { Link } from "react-router-dom";

const menu = [
  { text: "Dashboard", path: "/" },
  { text: "Customers", path: "/customers" },
  { text: "Events", path: "/events" },
  { text: "Quotations", path: "/quotations" },
  { text: "Finance", path: "/finance" },
  { text: "Inventory", path: "/inventory" },
  { text: "Reports", path: "/reports" },
  { text: "Admin", path: "/admin" }
];

export default function Sidebar() {
  return (
    <Box sx={{ width: 250, height: "100vh", bgcolor: "primary.main", color: "white" }}>
      <List>
        {menu.map((item) => (
          <ListItem button component={Link} to={item.path} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}