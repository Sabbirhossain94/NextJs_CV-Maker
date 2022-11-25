import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function ProfessionalSummary({ getProfessionalSummary }) {
  const [professionalhistory, setProfessionalHistory] = useState({
    summary: "",
  });
  const handleInputChange =(event)=>{
    const {name, value} = event.target
    setProfessionalHistory({
      [name]: value
    });
  }
  getProfessionalSummary(professionalhistory);
  return (
    <Box>
      <Typography
        sx={{
          width: "33%",
          marginTop: "50px",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Professional History
      </Typography>
      <Grid container columns={16}>
        <Grid item xs={6} md={15} variant="contained">
          <Box
            sx={{
              height: "219px",
              overflow: "auto",
              border: "1px solid",
              borderColor: "#e7eaf4",
              borderRadius: "5px",
              backgroundColor: "#e7eaf4",
            }}
          >
            <TextField
              name="summary"
              value={professionalhistory.summary}
              multiline
              rows={8}
              sx={{ width: "100%" }}
              onChange={handleInputChange}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
