import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { VendorService } from "../../services/vendorService";
import { useNavigate } from "react-router-dom";

export default function VendorList() {
  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const { data } = await VendorService.getAll();
    setVendors(data || []);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Typography variant="h5">Vendors</Typography>
        <Button variant="contained" onClick={() => navigate("/vendors/add")}>Add Vendor</Button>
      </Box>

      <Grid container spacing={2}>
        {vendors.map((v) => (
          <Grid item xs={12} md={4} key={v.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{v.name}</Typography>
                <Typography>{v.category}</Typography>
                <Typography>Rating: {v.rating}</Typography>
                <Typography>Status: {v.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}