import { useState } from "react";
import { Box, TextField, Button, Paper, Typography } from "@mui/material";
import { supabase } from "../../config/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await supabase.from("customers").insert([
      { name, email, phone }
    ]);

    navigate("/customers");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={2}>Add Customer</Typography>

        <TextField fullWidth label="Name" margin="normal" value={name} onChange={(e) => setName(e.target.value)} />
        <TextField fullWidth label="Email" margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField fullWidth label="Phone" margin="normal" value={phone} onChange={(e) => setPhone(e.target.value)} />

        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleSubmit}>
          Save
        </Button>
      </Paper>
    </Box>
  );
}