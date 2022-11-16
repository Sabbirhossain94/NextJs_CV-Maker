import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdditionalDetails from "./subcomponents/AdditionalDetails";


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
                sx={{ width: "100%", background: "#e7eaf4" ,borderRadius: "5px"}}
                InputLabelProps={{
                  sx: {
                    color: "#828ba2",
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
          )
        )}
      </Grid>
      <AdditionalDetails />
    </Box>
  );
}
