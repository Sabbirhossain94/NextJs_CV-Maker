import * as React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function PersonalDetails() {
  return (
    <Box>
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
      <Grid
        container
        rowSpacing={5}
        columnSpacing={{ xs: 1, sm: 2, md: 4 }}
        columns={15}
      >
        {["First Name", "Last Name", "Email", "Phone", "Country", "City"].map(
          (item, key) => (
            <Grid item xs={4} md={7} key={key}>
              <TextField
                id="outlined-basic"
                label={item}
                variant="filled"
                sx={{ width: "100%", background: "#eff2f9" }}
                InputLabelProps={{
                  sx: {
                    color: "#828ba2",
                  },
                }}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
}
