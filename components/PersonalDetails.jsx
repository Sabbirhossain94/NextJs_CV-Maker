import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import PersonalDetailsAccordion from "../components/subcomponents/PersonalDetailsAccordion"
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PersonalDetails() {
  return (
    <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{
          width: "33%",
          paddingBottom: "20px",
          fontWeight: "700",
          fontSize: "20px",
        }}
      >
        Personal Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="Phone"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={4} md={6}>
          <TextField
            id="outlined-basic"
            label="City"
            variant="outlined"
            sx={{ width: "100%" }}
          />
        </Grid>
      </Grid>
      <PersonalDetailsAccordion />
    </Box>
  );
}
