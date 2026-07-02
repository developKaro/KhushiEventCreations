import { useState } from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import { VendorService } from "../../services/vendorService";
import { useNavigate } from "react-router-dom";

export default function AddVendor() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await VendorService.create({ name, category, phone });
    navigate("/vendors");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={2}>Add Vendor</Typography>

        <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth label="Category" margin="normal" value={category} onChange={(e) => setCategory(e.target.value)} />
        <TextField fullWidth label="Phone" margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
          Save Vendor
        </Button>
      </Paper>
    </Box>
  );
}