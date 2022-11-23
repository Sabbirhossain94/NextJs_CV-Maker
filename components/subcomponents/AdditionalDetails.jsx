import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

export default function AdditionalDetails() {
  
   const [values, setValues] = useState({
    address: "",
    postalcode: "",
    nationality: "",
    placeofbirth: "",
    dateofbirth: "",
    
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
    const [expanded, setExpanded] = React.useState(false);
      const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
      };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        marginLeft: "-15px",
        marginTop: "35px",
      }}
    >
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column-reverse",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          sx={{ flexDirection: "row-reverse", width: "30%" }}
          expandIcon={
            <ExpandMoreIcon color="primary" sx={{ display: "flex" }} />
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{
              flexShrink: 0,
              fontWeight: "700",
              borderRadius: "5px",
              width: "100%",
            }}
            color="primary"
          >
            Edit additional details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 6 }}
            columns={15}
          >
            
            <Grid item xs={4} md={7}>
              <TextField
                id="outlined-basic"
                label="Address"
                name="address"
                variant="filled"
                type="text"
                value={values.address}
                sx={{
                  width: "105%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                inputLabelProps={{
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
                label="Postal Code"
                name="postalcode"
                variant="filled"
                type="text"
                value={values.postalcode}
                sx={{
                  width: "105%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                inputLabelProps={{
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
                label="Nationality"
                name="nationality"
                variant="filled"
                type="text"
                value={values.nationality}
                sx={{
                  width: "105%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                inputLabelProps={{
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
                label="Place Of Birth"
                name="placeofbirth"
                variant="filled"
                type="text"
                value={values.placeofbirth}
                sx={{
                  width: "105%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                inputLabelProps={{
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
                label="Date Of Birth"
                name="dateofbirth"
                variant="filled"
                type="text"
                value={values.dateofbirth}
                sx={{
                  width: "105%",
                  background: "#e7eaf4",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
                inputLabelProps={{
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
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
