import * as React from "react";
import { useRef } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdditionalDetails from "./subcomponents/AdditionalDetails";
import { FormControl } from "@mui/material";

export default function PersonalDetails() {
 // const formData = useRef();

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
        {[
          {
            label: "First Name",
            name: "firstname",
            type: "text",
          },
          {
            label: "Last Name",
            name: "lastname",
            type: "text",
          },
          {
            label: "Email",
            name: "email",
            type: "email",
          },
          {
            label: "Phone",
            name: "phone",
            type: "tel",
          },
          {
            label: "Country",
            name: "country",
            type: "text",
          },
          {
            label: "City",
            name: "city",
            type: "text",
          },
        ].map((item, key) => (
          <Grid item xs={4} md={7} key={key}>
            
              <TextField
                id="outlined-basic"
                label={item.label}
                name={item.name}
                variant="filled"
                type={item.type}
                sx={{
                  width: "100%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                }}
                InputLabelProps={{
                  sx: {
                    color: "#828ba2",
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                onSubmit={(e) => setFormValues(e.target.value)}
              />
            
          </Grid>
        ))}
      </Grid>
      <AdditionalDetails />
    </Box>
  );
}
