import { Grid, Card, CardContent, Typography } from "@mui/material";

const stats = [
  { label: "Revenue", value: "₹2,45,000" },
  { label: "Events", value: "18" },
  { label: "Customers", value: "124" },
  { label: "Pending Payments", value: "₹45,000" }
];

export default function Dashboard() {
  return (
    <Grid container spacing={2}>
      {stats.map((item) => (
        <Grid item xs={12} md={3} key={item.label}>
          <Card sx={{ bgcolor: "#ff9800", color: "white" }}>
            <CardContent>
              <Typography variant="h6">{item.label}</Typography>
              <Typography variant="h4">{item.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}