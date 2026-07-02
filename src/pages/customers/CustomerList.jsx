import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Button, Grid } from "@mui/material";
import { supabase } from "../../config/supabaseClient";

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const { data } = await supabase.from("customers").select("*");
    setCustomers(data || []);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Customers</Typography>
        <Button variant="contained">Add Customer</Button>
      </Box>

      <Grid container spacing={2}>
        {customers.map((c) => (
          <Grid item xs={12} md={4} key={c.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{c.name}</Typography>
                <Typography>{c.phone}</Typography>
                <Typography>{c.email}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}