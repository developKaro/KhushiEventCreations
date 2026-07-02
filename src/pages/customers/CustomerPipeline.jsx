import { useEffect, useState } from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import { supabase } from "../../config/supabaseClient";

const stages = ["lead", "contacted", "proposal", "negotiation", "won", "lost"];

export default function CustomerPipeline() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await supabase.from("customers").select("*");
    setCustomers(data || []);
  };

  const getByStage = (stage) => customers.filter((c) => c.status === stage);

  return (
    <Box sx={{ overflowX: "auto", display: "flex", gap: 2 }}>
      {stages.map((stage) => (
        <Box key={stage} sx={{ minWidth: 250 }}>
          <Typography variant="h6" sx={{ mb: 1, textTransform: "capitalize" }}>
            {stage}
          </Typography>

          {getByStage(stage).map((c) => (
            <Card key={c.id} sx={{ mb: 1 }}>
              <CardContent>
                <Typography>{c.name}</Typography>
                <Typography variant="body2">{c.email}</Typography>
                <Typography variant="body2">{c.phone}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      ))}
    </Box>
  );
}