import Grid from "@mui/material/Grid";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

const DashboardCards = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard title="Total Revenue" value="1500000" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard title="Active Events" value="12" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard title="Revenue" value="₹25,00,000" />
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <SummaryCard title="Profit" value="₹10,00,000" />
      </Grid>
    </Grid>
  );
};

export default DashboardCards;