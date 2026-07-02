import { useEffect, useState } from "react";
import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import { VendorService } from "../../services/vendorService";

export default function VendorDashboard() {
  const [vendors, setVendors] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const { data } = await VendorService.getAll();
    setVendors(data || []);
  };

  const active = vendors.filter(v => v.status === "active").length;
  const total = vendors.length;
  const avgRating = vendors.length
    ? (vendors.reduce((s, v) => s + (v.rating || 0), 0) / vendors.length).toFixed(1)
    : 0;

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Total Vendors</Typography>
              <Typography variant="h4">{total}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Active Vendors</Typography>
              <Typography variant="h4">{active}</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography>Avg Rating</Typography>
              <Typography variant="h4">{avgRating}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}