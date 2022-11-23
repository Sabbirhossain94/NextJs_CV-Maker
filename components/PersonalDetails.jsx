import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdditionalDetails from "./subcomponents/AdditionalDetails";

export default function PersonalDetails() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

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
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstname"
            variant="filled"
            value={values.firstname}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            name="lastname"
            variant="filled"
            value={values.lastname}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Email"
            name="email"
            variant="filled"
            value={values.email}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Phone"
            name="phone"
            variant="filled"
            value={values.phone}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="Country"
            name="country"
            variant="filled"
            value={values.country}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={4} md={7}>
          <TextField
            id="outlined-basic"
            label="City"
            name="city"
            variant="filled"
            value={values.city}
            type="text"
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
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <AdditionalDetails />
    </Box>
  );
}
